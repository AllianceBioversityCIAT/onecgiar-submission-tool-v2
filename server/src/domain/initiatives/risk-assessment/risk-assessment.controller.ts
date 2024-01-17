import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RiskAssessmentService } from './risk-assessment.service';
import { CreateRiskAssessmentDto } from './dto/create-risk-assessment.dto';
import { UpdateRiskAssessmentDto } from './dto/update-risk-assessment.dto';

@Controller()
export class RiskAssessmentController {
  constructor(private readonly riskAssessmentService: RiskAssessmentService) {}

  @Post()
  create(@Body() createRiskAssessmentDto: CreateRiskAssessmentDto) {
    return this.riskAssessmentService.create(createRiskAssessmentDto);
  }

  @Get()
  findAll() {
    return this.riskAssessmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.riskAssessmentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRiskAssessmentDto: UpdateRiskAssessmentDto,
  ) {
    return this.riskAssessmentService.update(+id, updateRiskAssessmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.riskAssessmentService.remove(+id);
  }
}
