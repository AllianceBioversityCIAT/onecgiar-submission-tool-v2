import { Controller } from '@nestjs/common';
import { EntityLevel3Service } from './entity-level-3.service';

@Controller('entity-level-3')
export class EntityLevel3Controller {
  constructor(private readonly entityLevel3Service: EntityLevel3Service) {}
}
