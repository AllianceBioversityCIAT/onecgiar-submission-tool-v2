import { Controller } from '@nestjs/common';
import { ClarisaCgiarSubEntityTypesService } from './clarisa-cgiar-sub-entity-types.service';

@Controller()
export class ClarisaCgiarSubEntityTypesController {
  constructor(
    private readonly clarisaCgiarSubEntityTypesService: ClarisaCgiarSubEntityTypesService,
  ) {}
}
