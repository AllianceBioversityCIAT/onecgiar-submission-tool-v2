import {
  ConflictException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { DataSource, LessThanOrEqual } from 'typeorm';
import { Role } from './entities/role.entity';
import { ResponseUtils } from '../../shared/utils/response.utils';
import { ServiceResponseDto } from '../../shared/global-dto/service-response.dto';
import { JwtPayloadDto } from './dto/jwt-payload.dto';
import { UserRoleEntity } from '../../entities/user-role-entities/entities/user-role-entity.entity';
import { ClarisaCgiarEntityTypesEnum } from '../../shared/enums/cgiar-entity-type.enum';
import { QueryUtil } from '../../shared/utils/query.util';

@Injectable()
export class RolesService {
  constructor(private readonly dataSource: DataSource) {}

  find(type: string): Promise<ServiceResponseDto<Role[]>> {
    let custom: any = {};
    let properties: any = {
      role: { is_active: 1 },
    };

    if (type === 'app') {
      custom = {
        role: ['clarisa_entity_type_id IS NULL'],
      };
    } else {
      properties.role.clarisa_entity_type_id =
        ClarisaCgiarEntityTypesEnum.getFromName(type)?.value;
    }

    const config = QueryUtil.buildQueryWhere(properties, custom);

    return this.dataSource
      .transaction(async (manager) => {
        return manager
          .createQueryBuilder(Role, 'role')
          .where(config.where, config.attr)
          .getMany();
      })
      .then((data) =>
        ResponseUtils.format({
          message: 'Roles found successfully!',
          data,
          status: HttpStatus.OK,
        }),
      );
  }

  create(role: Role, user: JwtPayloadDto): Promise<ServiceResponseDto<Role>> {
    if (role.priority <= 1)
      throw new UnauthorizedException(
        'You are not authorized to create this role!',
      );

    return this.dataSource
      .transaction(async (manager) => {
        const hasRole = await manager.getRepository(UserRoleEntity).findOne({
          where: {
            user_id: user.user_id,
            is_active: true,
            role_obj: {
              priority: LessThanOrEqual(role.priority),
            },
          },
        });

        if (!hasRole)
          throw new UnauthorizedException(
            'You are not authorized to create this role!',
          );

        const ifExists = await manager.getRepository(Role).findOne({
          where: {
            role_name: role.role_name,
            is_active: true,
          },
        });

        if (ifExists) {
          throw new ConflictException('Role already exists!');
        }

        const TEMP_role: Partial<Role> = {
          role_name: role.role_name,
          priority: role.priority,
          clarisa_entity_type_id: role.clarisa_entity_type_id,
        };

        await manager
          .createQueryBuilder()
          .update(Role)
          .set({
            priority: () => 'priority + 1',
          })
          .where('priority >= :priority', { priority: role.priority })
          .execute();

        return manager.getRepository(Role).save(TEMP_role);
      })
      .then((data) =>
        ResponseUtils.format({
          message: 'Role created successfully!',
          data,
          status: HttpStatus.CREATED,
        }),
      );
  }
}
