import { Test, TestingModule } from '@nestjs/testing';
import { RiskAssessmentController } from './risk-assessment.controller';
import { RiskAssessmentService } from './risk-assessment.service';

describe('RiskAssessmentController', () => {
  let controller: RiskAssessmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiskAssessmentController],
      providers: [RiskAssessmentService],
    }).compile();

    controller = module.get<RiskAssessmentController>(RiskAssessmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
