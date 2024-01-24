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

@Entity('entities_level_2')
export class EntityLevel2 {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'entities_level_2_id',
  })
  entities_level_2_id: number;

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

  //--- relations

  @ManyToOne(() => Entities, (entities) => entities.entity_level_2_array)
  @JoinColumn({ name: 'entity_id' })
  entity_obj: Entities;

  @OneToMany(
    () => EntityLevel3,
    (entity_level_3) => entity_level_3.entity_level_2_obj,
  )
  entity_level_3_array: EntityLevel3[];
}
