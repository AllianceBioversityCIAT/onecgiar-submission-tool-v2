import { Controller } from '@nestjs/common';
import { InnovationPortfolioService } from './innovation-portfolio.service';

@Controller()
export class InnovationPortfolioController {
  constructor(
    private readonly innovationPortfolioService: InnovationPortfolioService,
  ) {}
}
