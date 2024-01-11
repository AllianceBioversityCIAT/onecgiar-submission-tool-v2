import { Test, TestingModule } from '@nestjs/testing';
import { TheoriesChangeController } from './theories-change.controller';
import { TheoriesChangeService } from './theories-change.service';

describe('TheoriesChangeController', () => {
  let controller: TheoriesChangeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TheoriesChangeController],
      providers: [TheoriesChangeService],
    }).compile();

    controller = module.get<TheoriesChangeController>(TheoriesChangeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
