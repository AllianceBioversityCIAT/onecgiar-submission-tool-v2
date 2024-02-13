import { PartialType } from '@nestjs/swagger';
import { CreateClarisaCgiarEntityDto } from './create-clarisa-cgiar-entity.dto';

export class UpdateClarisaCgiarEntityDto extends PartialType(
  CreateClarisaCgiarEntityDto,
) {}
