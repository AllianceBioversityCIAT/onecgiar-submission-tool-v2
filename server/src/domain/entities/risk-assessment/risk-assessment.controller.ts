import { Controller } from '@nestjs/common';
import { RiskAssessmentService } from './risk-assessment.service';

@Controller()
export class RiskAssessmentController {
  constructor(private readonly riskAssessmentService: RiskAssessmentService) {}
}
