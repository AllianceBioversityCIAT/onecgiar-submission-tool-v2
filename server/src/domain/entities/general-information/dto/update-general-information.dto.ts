import { PartialType } from '@nestjs/swagger';
import { CreateGeneralInformationDto } from './create-general-information.dto';

export class UpdateGeneralInformationDto extends PartialType(
  CreateGeneralInformationDto,
) {}
