import { Injectable } from '@nestjs/common';
import { CreateRiskAssessmentDto } from './dto/create-risk-assessment.dto';
import { UpdateRiskAssessmentDto } from './dto/update-risk-assessment.dto';

@Injectable()
export class RiskAssessmentService {
  create(createRiskAssessmentDto: CreateRiskAssessmentDto) {
    return 'This action adds a new riskAssessment';
  }

  findAll() {
    return `This action returns all riskAssessment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} riskAssessment`;
  }

  update(id: number, updateRiskAssessmentDto: UpdateRiskAssessmentDto) {
    return `This action updates a #${id} riskAssessment`;
  }

  remove(id: number) {
    return `This action removes a #${id} riskAssessment`;
  }
}
