import { Controller } from '@nestjs/common';
import { EntityDiagramImagesService } from './entity-diagram-images.service';

@Controller('entity-diagram-images')
export class EntityDiagramImagesController {
  constructor(
    private readonly entityDiagramImagesService: EntityDiagramImagesService,
  ) {}
}
