import { Controller } from '@nestjs/common';
import { ClarisaRegionsService } from './clarisa-regions.service';

@Controller()
export class ClarisaRegionsController {
  constructor(private readonly clarisaRegionsService: ClarisaRegionsService) {}
}
