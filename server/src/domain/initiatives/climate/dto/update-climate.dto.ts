import { PartialType } from '@nestjs/swagger';
import { CreateClimateDto } from './create-climate.dto';

export class UpdateClimateDto extends PartialType(CreateClimateDto) {}
