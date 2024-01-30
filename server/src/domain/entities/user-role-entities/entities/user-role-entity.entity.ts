import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/global-dto/auditable.entity';
import { User } from '../../../auth/users/entities/user.entity';
import { Role } from '../../../auth/roles/entities/role.entity';
import { Entities } from '../../entities/entities.entity';

@Entity('user_role_entities')
export class UserRoleEntity extends AuditableEntity {
  @PrimaryGeneratedColumn({
    name: 'user_role_entity_id',
    type: 'bigint',
  })
  user_role_entity_id: number;

  @Column({
    name: 'user_id',
    type: 'bigint',
    nullable: false,
  })
  user_id: number;

  @Column({
    name: 'role_id',
    type: 'bigint',
    nullable: false,
  })
  role_id: number;

  @Column({
    name: 'entity_id',
    type: 'bigint',
    nullable: true,
  })
  entity_id: number;

  // relations

  @ManyToOne(() => User, (user) => user.user_role_entity_array)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Role, (role) => role.user_role_entity_array)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @ManyToOne(() => Entities, (Entities) => Entities.user_role_entity_array)
  @JoinColumn({ name: 'entity_id' })
  entity: Entities;
}
