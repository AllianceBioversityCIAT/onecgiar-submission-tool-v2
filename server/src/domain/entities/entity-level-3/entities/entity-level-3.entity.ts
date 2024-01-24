import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EntityLevel2 } from '../../entity-level-2/entities/entity-level-2.entity';

@Entity('entities_level_3')
export class EntityLevel3 {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'entities_level_3_id',
  })
  entities_level_3_id: number;

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

  //--- relations

  @ManyToOne(
    () => EntityLevel2,
    (entity_level_2) => entity_level_2.entity_level_3_array,
  )
  @JoinColumn({ name: 'entity_level_2_id' })
  entity_level_2_obj!: EntityLevel2;
}
