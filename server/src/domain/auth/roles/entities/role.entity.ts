import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AuditableEntity } from '../../../shared/global-dto/auditable.entity';
import { UserRoleEntity } from '../../../entities/user-role-entities/entities/user-role-entity.entity';

@Entity('roles')
export class Role extends AuditableEntity {
  @PrimaryGeneratedColumn({
    name: 'role_id',
    type: 'bigint',
  })
  role_id: number;

  @Column({
    name: 'role_name',
    type: 'text',
    nullable: false,
  })
  role_name: string;

  @Column({
    name: 'role_description',
    type: 'text',
    nullable: true,
  })
  role_description: string;

  @Column({
    name: 'priority',
    type: 'int',
    nullable: false,
  })
  priority: number;

  // relations
  @OneToMany(() => UserRoleEntity, (user_role_entity) => user_role_entity.role)
  user_role_entity_array: UserRoleEntity[];
}
