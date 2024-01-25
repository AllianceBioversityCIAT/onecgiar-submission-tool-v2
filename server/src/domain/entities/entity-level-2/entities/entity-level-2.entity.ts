import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Entities } from '../../entities/entities.entity';
import { EntityLevel3 } from '../../entity-level-3/entities/entity-level-3.entity';
import { AuditableEntity } from '../../../shared/global-dto/auditable.entity';
import { ClarisaCgiarSubEntityType } from '../../../../tools/clarisa/clarisa-cgiar-sub-entity-types/entities/clarisa-cgiar-sub-entity-type.entity';

@Entity('entities_level_2')
export class EntityLevel2 extends AuditableEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'entity_level_2_id',
  })
  entity_level_2_id: number;

  @Column({
    type: 'text',
    name: 'name',
    nullable: true,
  })
  name!: string;

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
    type: 'bigint',
    name: 'entity_id',
    nullable: false,
  })
  entity_id: number;

  @Column({
    type: 'bigint',
    name: 'clarisa_cgiar_sub_entity_type_id',
    nullable: false,
  })
  sub_entity_type_id: number;

  //--- relations

  @ManyToOne(
    () => ClarisaCgiarSubEntityType,
    (sub_entity_type) => sub_entity_type.entities_level_2_array,
  )
  @JoinColumn({ name: 'clarisa_cgiar_sub_entity_type_id' })
  sub_entity_type_obj: ClarisaCgiarSubEntityType;

  @ManyToOne(() => Entities, (entities) => entities.entity_level_2_array)
  @JoinColumn({ name: 'entity_id' })
  entity_obj: Entities;

  @OneToMany(
    () => EntityLevel3,
    (entity_level_3) => entity_level_3.entity_level_2_obj,
  )
  entity_level_3_array: EntityLevel3[];
}
