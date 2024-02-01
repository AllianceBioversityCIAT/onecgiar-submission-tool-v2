import { Controller } from '@nestjs/common';
import { FlagshipDetailsService } from './flagship-details.service';

@Controller('flagship-details')
export class FlagshipDetailsController {
  constructor(
    private readonly flagshipDetailsService: FlagshipDetailsService,
  ) {}
}
