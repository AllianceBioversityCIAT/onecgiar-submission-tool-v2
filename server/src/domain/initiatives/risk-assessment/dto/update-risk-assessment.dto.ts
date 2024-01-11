import { PartialType } from '@nestjs/swagger';
import { CreateRiskAssessmentDto } from './create-risk-assessment.dto';

export class UpdateRiskAssessmentDto extends PartialType(CreateRiskAssessmentDto) {}
