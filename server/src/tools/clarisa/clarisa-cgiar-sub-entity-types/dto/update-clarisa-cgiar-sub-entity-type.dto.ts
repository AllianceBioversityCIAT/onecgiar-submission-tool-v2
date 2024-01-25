import { PartialType } from '@nestjs/swagger';
import { CreateClarisaCgiarSubEntityTypeDto } from './create-clarisa-cgiar-sub-entity-type.dto';

export class UpdateClarisaCgiarSubEntityTypeDto extends PartialType(CreateClarisaCgiarSubEntityTypeDto) {}
