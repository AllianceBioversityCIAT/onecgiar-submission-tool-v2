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

@Entity('entities')
export class Entities {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'entities_id',
    unsigned: true,
  })
  entities_id: number;

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
    type: 'text',
    name: 'phase_id',
    nullable: true,
  })
  phase_id!: string;

  @Column({
    type: 'bigint',
    name: 'entity_type_id',
    nullable: false,
  })
  entity_type_id: number;

  //--- relations

  @ManyToOne(() => ClarisaCgiarEntityType, (entity_type) => entity_type.code)
  @JoinColumn({ name: 'entity_type_id' })
  entity_type: ClarisaCgiarEntityType;

  @OneToMany(() => EntityLevel2, (entity_level_2) => entity_level_2.entities)
  entities_level_2!: EntityLevel2[];
}
