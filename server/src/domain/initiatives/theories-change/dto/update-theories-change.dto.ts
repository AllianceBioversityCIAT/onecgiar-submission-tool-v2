import { PartialType } from '@nestjs/swagger';
import { CreateTheoriesChangeDto } from './create-theories-change.dto';

export class UpdateTheoriesChangeDto extends PartialType(
  CreateTheoriesChangeDto,
) {}
