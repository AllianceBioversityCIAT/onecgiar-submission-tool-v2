import { PartialType } from '@nestjs/swagger';
import { CreateEntityDiagramImageDto } from './create-entity-diagram-image.dto';

export class UpdateEntityDiagramImageDto extends PartialType(
  CreateEntityDiagramImageDto,
) {}
