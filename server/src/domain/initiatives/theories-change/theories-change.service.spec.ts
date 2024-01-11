import { Test, TestingModule } from '@nestjs/testing';
import { TheoriesChangeService } from './theories-change.service';

describe('TheoriesChangeService', () => {
  let service: TheoriesChangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TheoriesChangeService],
    }).compile();

    service = module.get<TheoriesChangeService>(TheoriesChangeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
