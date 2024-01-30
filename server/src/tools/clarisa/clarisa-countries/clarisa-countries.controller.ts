import { Controller } from '@nestjs/common';
import { ClarisaCountriesService } from './clarisa-countries.service';

@Controller()
export class ClarisaCountriesController {
  constructor(
    private readonly clarisaCountriesService: ClarisaCountriesService,
  ) {}
}
