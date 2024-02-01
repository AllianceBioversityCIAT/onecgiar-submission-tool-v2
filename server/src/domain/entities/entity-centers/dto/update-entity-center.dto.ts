import { PartialType } from '@nestjs/swagger';
import { CreateEntityCenterDto } from './create-entity-center.dto';

export class UpdateEntityCenterDto extends PartialType(CreateEntityCenterDto) {}
