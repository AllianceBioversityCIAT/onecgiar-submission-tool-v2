import { PartialType } from '@nestjs/swagger';
import { CreateInitiativeDetailDto } from './create-initiative-detail.dto';

export class UpdateInitiativeDetailDto extends PartialType(CreateInitiativeDetailDto) {}
