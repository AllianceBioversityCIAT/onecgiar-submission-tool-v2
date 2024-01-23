import { Controller } from '@nestjs/common';
import { GeneralInformationService } from './general-information.service';

@Controller()
export class GeneralInformationController {
  constructor(
    private readonly generalInformationService: GeneralInformationService,
  ) {}
}
