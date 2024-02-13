import { PartialType } from '@nestjs/swagger';
import { CreateTheoryOfChangeDto } from './create-theory-of-change.dto';

export class UpdateTheoryOfChangeDto extends PartialType(
  CreateTheoryOfChangeDto,
) {}
