import { ApiProperty } from '@nestjs/swagger';
import { EntityCenter } from '../entity-centers/entities/entity-center.entity';
import { EntityDiagramImage } from '../entity-diagram-images/entities/entity-diagram-image.entity';
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
  phase_id!: number;

  @ApiProperty()
  entity_type_id: number;

  @ApiProperty()
  parent_entity_id!: number;

  @ApiProperty({ type: [EntityCenter] })
  entity_center_array: EntityCenter[];

  @ApiProperty({ type: [EntityImpactArea] })
  entity_impact_area_array: EntityImpactArea[];

  @ApiProperty({
    type: [EntityDiagramImage],
  })
  entity_diagram_image_array: EntityDiagramImage[];

  @ApiProperty({ type: InitiativeDetail })
  initiative_detail_obj: InitiativeDetail = new InitiativeDetail();
}
