import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource, In, Like } from 'typeorm';
import { User } from './entities/user.entity';
import { QueryUtil } from '../../shared/utils/query.util';
import { ServiceResponseDto } from '../../shared/global-dto/service-response.dto';
import { ResponseUtils } from '../../shared/utils/response.utils';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRoleEntity } from '../../entities/user-role-entities/entities/user-role-entity.entity';
import { Role } from '../roles/entities/role.entity';

@Injectable()
export class UsersService {
  constructor(private readonly dataSource: DataSource) {}

  find(
    id: number,
    active: number,
    email: string,
  ): Promise<ServiceResponseDto<User[]>> {
    const TEMP_email = email ? [`email like '%${email}%'`] : [];
    const config = QueryUtil.buildQueryWhere(
      {
        user: {
          is_active: active,
          user_id: id,
        },
      },
      {
        user: [...TEMP_email],
      },
    );
    const resUser = this.dataSource.transaction(async (manager) => {
      return manager
        .getRepository(User)
        .createQueryBuilder('user')
        .where(config.where, config.attr)
        .getMany();
    });

    return resUser.then((data) =>
      ResponseUtils.format({
        message: 'Users found successfully!',
        data,
        status: HttpStatus.OK,
      }),
    );
  }

  create(user: CreateUserDto): Promise<ServiceResponseDto<User>> {
    return this.dataSource
      .transaction(async (manager) => {
        const ifExists = await manager.getRepository(User).findOne({
          where: {
            email: Like(user.email),
            is_active: true,
          },
        });
        if (ifExists) {
          throw new ConflictException('User already exists!');
        }

        const TEMP_user: Partial<User> = {
          email: user.email?.toLowerCase(),
          first_name: user.first_name?.trim(),
          last_name: user.last_name?.trim(),
        };
        const newUser = await manager.getRepository(User).save(TEMP_user);
        const roles = await manager.getRepository(Role).find({
          where: {
            role_name: In(['Admin', 'Guest']),
            is_active: true,
          },
        });
        const TEMP_role: Partial<UserRoleEntity> = {
          user_id: newUser.user_id,
        };

        if (user.is_admin) {
          TEMP_role.role_id = roles.find(
            (role) => role.role_name === 'Admin',
          ).role_id;
        } else {
          TEMP_role.role_id = roles.find(
            (role) => role.role_name === 'Guest',
          ).role_id;
        }

        await manager.getRepository(UserRoleEntity).save(TEMP_role);

        return newUser;
      })
      .then((data) =>
        ResponseUtils.format({
          message: 'User created successfully!',
          data,
          status: HttpStatus.CREATED,
        }),
      );
  }

  findEntityType(entity_id: number): Promise<ServiceResponseDto<User[]>> {
    const res = this.dataSource.transaction(async (manager) => {
      const entity = await manager
        .getRepository(User)
        .createQueryBuilder('user')
        .leftJoin('user.user_role_entity_array', 'urea')
        .where('user.is_active = true AND urea.entity_id = :entity_id', {
          entity_id,
        })
        .getMany();

      return entity;
    });

    return res.then((data) =>
      ResponseUtils.format({
        message: 'Users found successfully!',
        data,
        status: HttpStatus.OK,
      }),
    );
  }
}
