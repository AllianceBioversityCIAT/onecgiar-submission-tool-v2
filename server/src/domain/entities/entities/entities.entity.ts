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

@Entity('entities')
export class Entities extends AuditableEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'entities_id',
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
  entity_type_obj: ClarisaCgiarEntityType;

  @OneToMany(() => EntityLevel2, (entity_level_2) => entity_level_2.entity_obj)
  entity_level_2_array!: EntityLevel2[];
}
