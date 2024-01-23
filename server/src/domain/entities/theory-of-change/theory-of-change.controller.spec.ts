import { Test, TestingModule } from '@nestjs/testing';
import { TheoryOfChangeController } from './theory-of-change.controller';
import { TheoryOfChangeService } from './theory-of-change.service';

describe('TheoryOfChangeController', () => {
  let controller: TheoryOfChangeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TheoryOfChangeController],
      providers: [TheoryOfChangeService],
    }).compile();

    controller = module.get<TheoryOfChangeController>(TheoryOfChangeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
