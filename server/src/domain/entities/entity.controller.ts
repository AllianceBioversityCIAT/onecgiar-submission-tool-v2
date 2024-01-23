import { Controller } from '@nestjs/common';
import { EntityService } from './entity.service';

@Controller()
export class EntityController {
  constructor(private readonly initiativesService: EntityService) {}
}
