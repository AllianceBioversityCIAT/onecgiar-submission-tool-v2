import { Test, TestingModule } from '@nestjs/testing';
import { GeneralInformationService } from './general-information.service';

describe('GeneralInformationService', () => {
  let service: GeneralInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralInformationService],
    }).compile();

    service = module.get<GeneralInformationService>(GeneralInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
