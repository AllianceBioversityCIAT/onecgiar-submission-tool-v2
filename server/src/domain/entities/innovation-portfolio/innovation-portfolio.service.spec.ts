import { Test, TestingModule } from '@nestjs/testing';
import { InnovationPortfolioService } from './innovation-portfolio.service';

describe('InnovationPortfolioService', () => {
  let service: InnovationPortfolioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InnovationPortfolioService],
    }).compile();

    service = module.get<InnovationPortfolioService>(
      InnovationPortfolioService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
