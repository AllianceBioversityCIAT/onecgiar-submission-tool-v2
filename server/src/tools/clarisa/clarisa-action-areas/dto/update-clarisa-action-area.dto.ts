import { PartialType } from '@nestjs/swagger';
import { CreateClarisaActionAreaDto } from './create-clarisa-action-area.dto';

export class UpdateClarisaActionAreaDto extends PartialType(
  CreateClarisaActionAreaDto,
) {}
