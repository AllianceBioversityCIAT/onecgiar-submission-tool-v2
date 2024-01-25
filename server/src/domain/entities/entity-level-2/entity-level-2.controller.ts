import { Controller } from '@nestjs/common';
import { EntityLevel2Service } from './entity-level-2.service';

@Controller('entity-level-2')
export class EntityLevel2Controller {
  constructor(private readonly entityLevel2Service: EntityLevel2Service) {}
}
