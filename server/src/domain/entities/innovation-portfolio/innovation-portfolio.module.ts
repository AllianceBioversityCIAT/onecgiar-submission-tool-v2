import { Module } from '@nestjs/common';
import { InnovationPortfolioService } from './innovation-portfolio.service';
import { InnovationPortfolioController } from './innovation-portfolio.controller';

@Module({
  controllers: [InnovationPortfolioController],
  providers: [InnovationPortfolioService],
})
export class InnovationPortfolioModule {}
