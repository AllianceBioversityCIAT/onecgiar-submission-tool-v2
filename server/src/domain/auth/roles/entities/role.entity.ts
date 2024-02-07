import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/global-dto/auditable.entity';
import { UserRoleEntity } from '../../../entities/user-role-entities/entities/user-role-entity.entity';
import { ClarisaCgiarEntityType } from '../../../../tools/clarisa/clarisa-cgiar-entity-types/entities/clarisa-cgiar-entity-type.entity';

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

  @Column({
    name: 'clarisa_entity_type_id',
    type: 'bigint',
    nullable: true,
  })
  clarisa_entity_type_id: number;

  // relations
  @OneToMany(
    () => UserRoleEntity,
    (user_role_entity) => user_role_entity.role_obj,
  )
  user_role_entity_array: UserRoleEntity[];

  @ManyToOne(
    () => ClarisaCgiarEntityType,
    (clarisa_cgiar_entity_type) => clarisa_cgiar_entity_type.role_array,
  )
  @JoinColumn({ name: 'clarisa_entity_type_id' })
  clarisa_cgiar_entity_type_obj: ClarisaCgiarEntityType;
}
