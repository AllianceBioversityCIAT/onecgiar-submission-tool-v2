import { ApiProperty } from '@nestjs/swagger';
import { EntityCenter } from '../entity-centers/entities/entity-center.entity';
import { EntityImpactArea } from '../entity-impact-areas/entities/entity-impact-area.entity';
import { InitiativeDetail } from '../initiative-details/entities/initiative-detail.entity';

export class BodySaveOverviewDoc {
  @ApiProperty()
  entity_id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  short_name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  official_code: string;

  @ApiProperty()
  entity_type_id: number;

  @ApiProperty()
  parent_entity_id!: number;

  @ApiProperty({
    type: [
      {
        clarisa_center_code: { type: 'string' },
      },
    ],
  })
  entity_center_array: EntityCenter[];

  @ApiProperty({
    type: [
      {
        clarisa_impact_area_id: { type: 'number' },
      },
    ],
  })
  entity_impact_area_array: EntityImpactArea[];

  @ApiProperty({
    type: {
      entity_initiative_id: { type: 'number' },
      lead_name: { type: 'string' },
      lead_email: { type: 'string' },
      co_lead_id: { type: 'string' },
      co_lead_email: { type: 'string' },
      budget: { type: 'number' },
      clarisa_primary_action_area_id: { type: 'number' },
    },
  })
  initiative_detail_obj: InitiativeDetail = new InitiativeDetail();
}
