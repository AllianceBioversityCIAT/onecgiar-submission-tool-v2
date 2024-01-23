import { Test, TestingModule } from '@nestjs/testing';
import { TheoryOfChangeService } from './theory-of-change.service';

describe('TheoryOfChangeService', () => {
  let service: TheoryOfChangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TheoryOfChangeService],
    }).compile();

    service = module.get<TheoryOfChangeService>(TheoryOfChangeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
