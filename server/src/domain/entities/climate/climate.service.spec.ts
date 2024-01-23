import { Test, TestingModule } from '@nestjs/testing';
import { ClimateService } from './climate.service';

describe('ClimateService', () => {
  let service: ClimateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClimateService],
    }).compile();

    service = module.get<ClimateService>(ClimateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
