import { Controller } from '@nestjs/common';
import { ClarisaCgiarEntitiesService } from './clarisa-cgiar-entities.service';

@Controller()
export class ClarisaCgiarEntitiesController {
  constructor(
    private readonly clarisaCgiarEntitiesService: ClarisaCgiarEntitiesService,
  ) {}
}
