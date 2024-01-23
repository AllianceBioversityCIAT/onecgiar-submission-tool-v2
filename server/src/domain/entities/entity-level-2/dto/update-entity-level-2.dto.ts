import { PartialType } from '@nestjs/swagger';
import { CreateEntityLevel2Dto } from './create-entity-level-2.dto';

export class UpdateEntityLevel2Dto extends PartialType(CreateEntityLevel2Dto) {}
