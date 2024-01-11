import { Module } from '@nestjs/common';
import { RiskAssessmentService } from './risk-assessment.service';
import { RiskAssessmentController } from './risk-assessment.controller';

@Module({
  controllers: [RiskAssessmentController],
  providers: [RiskAssessmentService],
})
export class RiskAssessmentModule {}
