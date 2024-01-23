import { Test, TestingModule } from '@nestjs/testing';
import { PeopleAndCultureService } from './people-and-culture.service';

describe('PeopleAndCultureService', () => {
  let service: PeopleAndCultureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleAndCultureService],
    }).compile();

    service = module.get<PeopleAndCultureService>(PeopleAndCultureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
