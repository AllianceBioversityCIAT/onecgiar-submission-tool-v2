import { PartialType } from '@nestjs/swagger';
import { CreateFlagshipDetailDto } from './create-flagship-detail.dto';

export class UpdateFlagshipDetailDto extends PartialType(
  CreateFlagshipDetailDto,
) {}
