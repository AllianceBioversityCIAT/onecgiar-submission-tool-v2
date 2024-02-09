import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, EntityManager, IsNull } from 'typeorm';
import { UserRoleEntity } from './entities/user-role-entity.entity';
import { Entities } from '../entities/entities.entity';
import { Role } from '../../auth/roles/entities/role.entity';

@Injectable()
export class UserRoleEntitiesService {
  constructor(private readonly dataSource: DataSource) {}

  async updateRole(
    manager: EntityManager,
    user_id: number,
    role_id: number,
    entity: Entities = null,
  ): Promise<void> {
    if (!user_id) return;
    const role = await manager.getRepository(Role).findOne({
      where: {
        role_id: role_id,
        clarisa_entity_type_id: entity?.entity_type_id
          ? entity.entity_type_id
          : IsNull(),
      },
    });

    if (!role) {
      throw new BadRequestException('Role not found or invalid!');
    }

    const existsUserRole = await manager.getRepository(UserRoleEntity).findOne({
      where: {
        user_id: user_id,
        entity_id: entity.entity_id ? entity.entity_id : IsNull(),
      },
    });
    if (existsUserRole) {
      existsUserRole.role_id = role_id;
      await manager
        .getRepository(UserRoleEntity)
        .update(existsUserRole.user_role_entity_id, existsUserRole);
    } else {
      await manager.getRepository(UserRoleEntity).save({
        role_id: role_id,
        user_id: user_id,
        entity_id: entity?.entity_id || null,
      });
    }
  }
}
