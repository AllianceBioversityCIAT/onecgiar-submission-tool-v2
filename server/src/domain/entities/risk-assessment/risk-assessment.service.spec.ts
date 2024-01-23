import { Test, TestingModule } from '@nestjs/testing';
import { RiskAssessmentService } from './risk-assessment.service';

describe('RiskAssessmentService', () => {
  let service: RiskAssessmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiskAssessmentService],
    }).compile();

    service = module.get<RiskAssessmentService>(RiskAssessmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
