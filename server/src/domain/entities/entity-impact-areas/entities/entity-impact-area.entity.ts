import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuditableEntity } from '../../../shared/global-dto/auditable.entity';
import { Entities } from '../../entities/entities.entity';
import { ClarisaImpactArea } from '../../../../tools/clarisa/clarisa-impact-areas/entities/clarisa-impact-area.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('entity_impact_areas')
export class EntityImpactArea extends AuditableEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn({
    name: 'entity_impact_area_id',
    type: 'bigint',
  })
  entity_impact_area_id: number;

  @ApiProperty()
  @Column({
    name: 'entity_id',
    type: 'bigint',
    nullable: false,
  })
  entity_id: number;

  @ApiProperty()
  @Column({
    name: 'clarisa_impact_area_id',
    type: 'bigint',
    nullable: false,
  })
  clarisa_impact_area_id: number;

  //--- relations

  @ManyToOne(() => Entities, (entity) => entity.entity_impact_area_array)
  @JoinColumn({ name: 'entity_id' })
  entity_obj: Entities;

  @ManyToOne(
    () => ClarisaImpactArea,
    (impact_area) => impact_area.entity_impact_area_array,
  )
  @JoinColumn({ name: 'clarisa_impact_area_id' })
  clarisa_impact_area_obj: ClarisaImpactArea;
}
