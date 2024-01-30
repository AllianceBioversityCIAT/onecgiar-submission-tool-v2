import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClarisaCgiarEntityType } from '../../../tools/clarisa/clarisa-cgiar-entity-types/entities/clarisa-cgiar-entity-type.entity';
import { EntityLevel2 } from '../entity-level-2/entities/entity-level-2.entity';
import { AuditableEntity } from '../../shared/global-dto/auditable.entity';
import { UserRoleEntity } from '../user-role-entities/entities/user-role-entity.entity';

@Entity('entities')
export class Entities extends AuditableEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'entity_id',
  })
  entity_id: number;

  @Column({
    type: 'text',
    name: 'name',
    nullable: true,
  })
  name!: string;

  @Column({
    type: 'text',
    name: 'short_name',
    nullable: true,
  })
  short_name!: string;

  @Column({
    type: 'text',
    name: 'description',
    nullable: true,
  })
  description!: string;

  @Column({
    type: 'text',
    name: 'official_code',
    nullable: true,
  })
  official_code!: string;

  @Column({
    type: 'text',
    name: 'phase_id',
    nullable: true,
  })
  phase_id!: string;

  @Column({
    type: 'bigint',
    name: 'clarisa_cgiar_entity_type_id',
    nullable: false,
  })
  entity_type_id: number;

  //--- relations

  @ManyToOne(
    () => ClarisaCgiarEntityType,
    (entity_type) => entity_type.entities_array,
  )
  @JoinColumn({ name: 'clarisa_cgiar_entity_type_id' })
  entity_type_obj!: ClarisaCgiarEntityType;

  @OneToMany(() => EntityLevel2, (entity_level_2) => entity_level_2.entity_obj)
  entity_level_2_array!: EntityLevel2[];

  @OneToMany(() => UserRoleEntity, (UserRoleEntity) => UserRoleEntity.entity)
  user_role_entity_array!: UserRoleEntity[];
}
