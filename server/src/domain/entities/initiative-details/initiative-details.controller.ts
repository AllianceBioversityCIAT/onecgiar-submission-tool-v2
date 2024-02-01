import { Controller } from '@nestjs/common';
import { InitiativeDetailsService } from './initiative-details.service';

@Controller('initiative-details')
export class InitiativeDetailsController {
  constructor(
    private readonly initiativeDetailsService: InitiativeDetailsService,
  ) {}
}
