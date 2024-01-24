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
    name: 'entities_id',
    nullable: false,
  })
  entities_id: number;

  //--- relations

  @ManyToOne(() => Entities, (entities) => entities.entities_level_2)
  @JoinColumn({ name: 'entities_id' })
  entities: Entities;

  @OneToMany(
    () => EntityLevel3,
    (entity_level_3) => entity_level_3.entities_level_2,
  )
  entities_level_3: EntityLevel3[];
}
