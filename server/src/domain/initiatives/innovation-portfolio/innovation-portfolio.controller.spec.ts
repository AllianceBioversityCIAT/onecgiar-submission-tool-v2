import { Test, TestingModule } from '@nestjs/testing';
import { InnovationPortfolioController } from './innovation-portfolio.controller';
import { InnovationPortfolioService } from './innovation-portfolio.service';

describe('InnovationPortfolioController', () => {
  let controller: InnovationPortfolioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InnovationPortfolioController],
      providers: [InnovationPortfolioService],
    }).compile();

    controller = module.get<InnovationPortfolioController>(InnovationPortfolioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
