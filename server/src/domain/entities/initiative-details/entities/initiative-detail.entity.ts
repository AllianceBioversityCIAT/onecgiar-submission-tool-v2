import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Entities } from '../../entities/entities.entity';
import { AuditableEntity } from '../../../shared/global-dto/auditable.entity';
import { ClarisaActionArea } from '../../../../tools/clarisa/clarisa-action-areas/entities/clarisa-action-area.entity';

@Entity('initiative_details')
export class InitiativeDetail extends AuditableEntity {
  @Column({
    type: 'bigint',
    name: 'entity_initiative_id',
    nullable: false,
    primary: true,
  })
  entity_initiative_id: number;

  @Column({
    name: 'lead_name',
    type: 'text',
    nullable: true,
  })
  lead_name!: string;

  @Column({
    name: 'lead_email',
    type: 'text',
    nullable: true,
  })
  lead_email!: string;

  @Column({
    name: 'co_lead_name',
    type: 'text',
    nullable: true,
  })
  co_lead_name!: string;

  @Column({
    name: 'co_lead_email',
    type: 'text',
    nullable: true,
  })
  co_lead_email!: string;

  @Column({
    name: 'budget',
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  budget!: number;

  @Column({
    name: 'clarisa_primary_action_area_id',
    type: 'bigint',
    nullable: true,
  })
  clarisa_primary_action_area_id!: number;

  @Column({
    name: 'executive_summary_html',
    type: 'text',
    nullable: true,
  })
  executive_summary_html!: string;

  @Column({
    name: 'executive_summary',
    type: 'text',
    nullable: true,
  })
  executive_summary!: string;

  //--- relations

  @OneToOne(() => Entities, (entity) => entity.initiative_detail_obj)
  @JoinColumn({ name: 'entity_initiative_id' })
  entity_obj!: Entities;

  @ManyToOne(
    () => ClarisaActionArea,
    (action_area) => action_area.initiative_array,
  )
  @JoinColumn({ name: 'clarisa_primary_action_area_id' })
  clarisa_primary_action_area_obj!: ClarisaActionArea;
}
