import { Controller } from '@nestjs/common';
import { ClarisaCgiarEntityTypesService } from './clarisa-cgiar-entity-types.service';

@Controller('clarisa-cgiar-entity-types')
export class ClarisaCgiarEntityTypesController {
  constructor(
    private readonly clarisaCgiarEntityTypesService: ClarisaCgiarEntityTypesService,
  ) {}
}
