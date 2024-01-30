import { Controller } from '@nestjs/common';
import { ClarisaImpactAreasService } from './clarisa-impact-areas.service';

@Controller('clarisa-impact-areas')
export class ClarisaImpactAreasController {
  constructor(private readonly clarisaImpactAreasService: ClarisaImpactAreasService) {}
}
