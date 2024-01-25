import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EntityLevel2 } from '../../entity-level-2/entities/entity-level-2.entity';
import { AuditableEntity } from '../../../shared/global-dto/auditable.entity';
import { ClarisaCgiarSubEntityType } from '../../../../tools/clarisa/clarisa-cgiar-sub-entity-types/entities/clarisa-cgiar-sub-entity-type.entity';

@Entity('entities_level_3')
export class EntityLevel3 extends AuditableEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'entity_level_3_id',
  })
  entity_level_3_id: number;

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
    name: 'entity_level_2_id',
    nullable: false,
  })
  entity_level_2_id: number;

  @Column({
    type: 'bigint',
    name: 'clarisa_cgiar_sub_entity_type_id',
    nullable: false,
  })
  sub_entity_type_id: number;

  //--- relations

  @ManyToOne(
    () => ClarisaCgiarSubEntityType,
    (sub_entity_type) => sub_entity_type.entities_level_3_array,
  )
  @JoinColumn({ name: 'clarisa_cgiar_sub_entity_type_id' })
  sub_entity_type_obj: ClarisaCgiarSubEntityType;

  @ManyToOne(
    () => EntityLevel2,
    (entity_level_2) => entity_level_2.entity_level_3_array,
  )
  @JoinColumn({ name: 'entity_level_2_id' })
  entity_level_2_obj!: EntityLevel2;
}
