import { Controller } from '@nestjs/common';
import { ClarisaCgiarEntityTypesService } from './clarisa-cgiar-entity-types.service';

@Controller()
export class ClarisaCgiarEntityTypesController {
  constructor(
    private readonly clarisaCgiarEntityTypesService: ClarisaCgiarEntityTypesService,
  ) {}
}
