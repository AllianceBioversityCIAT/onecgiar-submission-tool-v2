import { Controller } from '@nestjs/common';
import { EntityImpactAreasService } from './entity-impact-areas.service';

@Controller('entity-impact-areas')
export class EntityImpactAreasController {
  constructor(
    private readonly entityImpactAreasService: EntityImpactAreasService,
  ) {}
}
