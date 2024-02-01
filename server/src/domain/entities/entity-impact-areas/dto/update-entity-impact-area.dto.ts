import { PartialType } from '@nestjs/swagger';
import { CreateEntityImpactAreaDto } from './create-entity-impact-area.dto';

export class UpdateEntityImpactAreaDto extends PartialType(CreateEntityImpactAreaDto) {}
