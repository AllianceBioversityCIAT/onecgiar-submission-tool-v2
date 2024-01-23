import { Controller } from '@nestjs/common';
import { FinancialResourcesService } from './financial-resources.service';

@Controller()
export class FinancialResourcesController {
  constructor(
    private readonly financialResourcesService: FinancialResourcesService,
  ) {}
}
