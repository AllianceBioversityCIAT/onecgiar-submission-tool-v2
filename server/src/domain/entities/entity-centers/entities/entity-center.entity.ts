import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/global-dto/auditable.entity';
import { Entities } from '../../entities/entities.entity';
import { ClarisaCgiarEntity } from '../../../../tools/clarisa/clarisa-cgiar-entities/entities/clarisa-cgiar-entity.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('entity_centers')
export class EntityCenter extends AuditableEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn({
    name: 'entity_center_id',
    type: 'bigint',
  })
  entity_center_id: number;

  @ApiProperty()
  @Column({
    name: 'entity_id',
    type: 'bigint',
    nullable: false,
  })
  entity_id: number;

  @ApiProperty()
  @Column({
    type: 'varchar',
    length: 15,
    name: 'clarisa_code',
    primary: true,
  })
  clarisa_code: string;

  //--- relations
  @ManyToOne(() => Entities, (entity) => entity.entity_center_array)
  @JoinColumn({ name: 'entity_id' })
  entity_obj: Entities;

  @ManyToOne(
    () => ClarisaCgiarEntity,
    (clarisa_entity) => clarisa_entity.entity_center_array,
  )
  @JoinColumn({ name: 'clarisa_code' })
  clarisa_entity_obj: ClarisaCgiarEntity;
}
