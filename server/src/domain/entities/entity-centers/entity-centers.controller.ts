import { Controller } from '@nestjs/common';
import { EntityCentersService } from './entity-centers.service';

@Controller()
export class EntityCentersController {
  constructor(private readonly entityCentersService: EntityCentersService) {}
}
