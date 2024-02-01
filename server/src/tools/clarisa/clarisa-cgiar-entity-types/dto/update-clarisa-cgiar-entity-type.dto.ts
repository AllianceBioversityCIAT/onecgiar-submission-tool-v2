import { PartialType } from '@nestjs/swagger';
import { CreateClarisaCgiarEntityTypeDto } from './create-clarisa-cgiar-entity-type.dto';

export class UpdateClarisaCgiarEntityTypeDto extends PartialType(CreateClarisaCgiarEntityTypeDto) {}
