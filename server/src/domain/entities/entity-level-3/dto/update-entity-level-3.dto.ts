import { PartialType } from '@nestjs/swagger';
import { CreateEntityLevel3Dto } from './create-entity-level-3.dto';

export class UpdateEntityLevel3Dto extends PartialType(CreateEntityLevel3Dto) {}
