import { Test, TestingModule } from '@nestjs/testing';
import { FinancialResourcesController } from './financial-resources.controller';
import { FinancialResourcesService } from './financial-resources.service';

describe('FinancialResourcesController', () => {
  let controller: FinancialResourcesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancialResourcesController],
      providers: [FinancialResourcesService],
    }).compile();

    controller = module.get<FinancialResourcesController>(FinancialResourcesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
