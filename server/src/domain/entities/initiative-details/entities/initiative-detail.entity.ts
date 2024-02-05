import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Entities } from '../../entities/entities.entity';
import { AuditableEntity } from '../../../shared/global-dto/auditable.entity';
import { ClarisaActionArea } from '../../../../tools/clarisa/clarisa-action-areas/entities/clarisa-action-area.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('initiative_details')
export class InitiativeDetail extends AuditableEntity {
  @ApiProperty()
  @Column({
    type: 'bigint',
    name: 'entity_initiative_id',
    nullable: false,
    primary: true,
  })
  entity_initiative_id: number;

  @ApiProperty()
  @Column({
    name: 'lead_name',
    type: 'text',
    nullable: true,
  })
  lead_name!: string;

  @ApiProperty()
  @Column({
    name: 'lead_email',
    type: 'text',
    nullable: true,
  })
  lead_email!: string;

  @ApiProperty()
  @Column({
    name: 'co_lead_name',
    type: 'text',
    nullable: true,
  })
  co_lead_name!: string;

  @ApiProperty()
  @Column({
    name: 'co_lead_email',
    type: 'text',
    nullable: true,
  })
  co_lead_email!: string;

  @ApiProperty()
  @Column({
    name: 'budget',
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  budget!: number;

  @ApiProperty()
  @Column({
    name: 'clarisa_primary_action_area_id',
    type: 'bigint',
    nullable: true,
  })
  clarisa_primary_action_area_id!: number;

  @ApiProperty()
  @ApiProperty()
  @Column({
    name: 'executive_summary_html',
    type: 'text',
    nullable: true,
  })
  executive_summary_html!: string;

  @ApiProperty()
  @Column({
    name: 'executive_summary',
    type: 'text',
    nullable: true,
  })
  executive_summary!: string;

  @ApiProperty()
  @Column({
    name: 'challenge_statement_html',
    type: 'text',
    nullable: true,
  })
  challenge_statement_html!: string;

  @ApiProperty()
  @Column({
    name: 'challenge_statement',
    type: 'text',
    nullable: true,
  })
  challenge_statement!: string;

  @ApiProperty()
  @Column({
    name: 'measurable_three_year_html',
    type: 'text',
    nullable: true,
  })
  measurable_three_year_html!: string;

  @ApiProperty()
  @Column({
    name: 'measurable_three_year',
    type: 'text',
    nullable: true,
  })
  measurable_three_year!: string;

  @ApiProperty()
  @Column({
    name: 'p25_initiative_model_html',
    type: 'text',
    nullable: true,
  })
  p25_initiative_model_html!: string;

  @ApiProperty()
  @Column({
    name: 'p25_initiative_model',
    type: 'text',
    nullable: true,
  })
  p25_initiative_model!: string;

  @ApiProperty()
  @Column({
    name: 'comparative_advantage_html',
    type: 'text',
    nullable: true,
  })
  comparative_advantage_html!: string;

  @ApiProperty()
  @Column({
    name: 'comparative_advantage',
    type: 'text',
    nullable: true,
  })
  comparative_advantage!: string;

  @ApiProperty()
  @Column({
    name: 'prior_evaluations_impact_assessments_html',
    type: 'text',
    nullable: true,
  })
  prior_evaluations_impact_assessments_html!: string;

  @ApiProperty()
  @Column({
    name: 'prior_evaluations_impact_assessments',
    type: 'text',
    nullable: true,
  })
  prior_evaluations_impact_assessments!: string;

  @ApiProperty()
  @Column({
    name: 'priority_setting_html',
    type: 'text',
    nullable: true,
  })
  priority_setting_html!: string;

  @ApiProperty()
  @Column({
    name: 'priority_setting',
    type: 'text',
    nullable: true,
  })
  priority_setting!: string;

  @ApiProperty()
  @Column({
    name: 'participatory_desing_process_html',
    type: 'text',
    nullable: true,
  })
  participatory_desing_process_html!: string;

  @ApiProperty()
  @Column({
    name: 'participatory_desing_process',
    type: 'text',
    nullable: true,
  })
  participatory_desing_process!: string;

  @ApiProperty()
  @Column({
    name: 'partnerships_html',
    type: 'text',
    nullable: true,
  })
  partnerships_html!: string;

  @ApiProperty()
  @Column({
    name: 'partnerships',
    type: 'text',
    nullable: true,
  })
  partnerships!: string;

  @ApiProperty()
  @Column({
    name: ' portfolio_linkages_html',
    type: 'text',
    nullable: true,
  })
  portfolio_linkages_html!: string;

  @ApiProperty()
  @Column({
    name: 'portfolio_linkages',
    type: 'text',
    nullable: true,
  })
  portfolio_linkages!: string;

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