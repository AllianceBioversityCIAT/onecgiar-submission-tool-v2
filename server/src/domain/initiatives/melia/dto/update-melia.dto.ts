import { PartialType } from '@nestjs/swagger';
import { CreateMeliaDto } from './create-melia.dto';

export class UpdateMeliaDto extends PartialType(CreateMeliaDto) {}
