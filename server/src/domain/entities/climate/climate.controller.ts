import { Controller } from '@nestjs/common';
import { ClimateService } from './climate.service';

@Controller()
export class ClimateController {
  constructor(private readonly climateService: ClimateService) {}
}
