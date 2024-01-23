import { Test, TestingModule } from '@nestjs/testing';
import { FinancialResourcesService } from './financial-resources.service';

describe('FinancialResourcesService', () => {
  let service: FinancialResourcesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinancialResourcesService],
    }).compile();

    service = module.get<FinancialResourcesService>(FinancialResourcesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
