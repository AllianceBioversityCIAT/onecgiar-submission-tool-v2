import { Test, TestingModule } from '@nestjs/testing';
import { PeopleCultureService } from './people-culture.service';

describe('PeopleCultureService', () => {
  let service: PeopleCultureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleCultureService],
    }).compile();

    service = module.get<PeopleCultureService>(PeopleCultureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
