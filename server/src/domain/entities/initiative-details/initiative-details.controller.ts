import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { InitiativeDetailsService } from './initiative-details.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { InitiativeDetail } from './entities/initiative-detail.entity';

@Controller()
export class InitiativeDetailsController {
  constructor(
    private readonly initiativeDetailsService: InitiativeDetailsService,
  ) {}

  @ApiTags('Context')
  @Get('context/challenge-statement')
  findChallengeStatement(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findInitiativeText(+entity_id, [
      'challenge_statement',
      'challenge_statement_html',
    ]);
  }

  @ApiTags('Context')
  @Get('context/measurable-three-year-outcome')
  findMesurableThreeYear(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findInitiativeText(+entity_id, [
      'measurable_three_year',
      'measurable_three_year_html',
      'p25_initiative_model',
      'p25_initiative_model_html',
    ]);
  }

  @ApiTags('Context')
  @Get('context/prio-evaluation-impact-assessments')
  findPrioEvaluationImpactAssessments(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findInitiativeText(+entity_id, [
      'prior_evaluations_impact_assessments',
      'prior_evaluations_impact_assessments_html',
    ]);
  }

  @ApiTags('Context')
  @Get('context/priority-setting')
  findPrioritySetting(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findInitiativeText(+entity_id, [
      'priority_setting',
      'priority_setting_html',
    ]);
  }

  @ApiTags('Context')
  @Get('context/participatory-desing-process')
  findParticipatoryDesingProcess(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findInitiativeText(+entity_id, [
      'participatory_desing_process',
      'participatory_desing_process_html',
    ]);
  }

  @ApiTags('Context')
  @Get('context/partnerships')
  findPartnership(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findInitiativeText(+entity_id, [
      'partnerships',
      'partnerships_html',
    ]);
  }

  @ApiTags('Context')
  @Get('context/portfolio-linkage')
  findPortfolioLinkage(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findInitiativeText(+entity_id, [
      'portfolio_linkages',
      'portfolio_linkages_html',
    ]);
  }

  @ApiTags('Portfolio')
  @Get('portfolio/vision-management-approach')
  findVisionManagementApproach(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findInitiativeText(+entity_id, [
      'vision_management_approach',
      'vision_management_approach_html',
    ]);
  }

  @ApiTags('Portfolio')
  @Get('portfolio/scaling-readiness-implementation')
  findScalingReadinessImplementation(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findInitiativeText(+entity_id, [
      'scaling_readiness_implementation',
      'scaling_readiness_implementation_html',
    ]);
  }

  @ApiTags('Gender')
  @Get('gender/research-impact-p25')
  findGenderResearchImpactP25(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findInitiativeText(+entity_id, [
      'gender_research_impact_p25',
      'gender_research_impact_p25_html',
    ]);
  }

  @ApiTags('Climate')
  @Get('climate/change-focus-p25')
  findClimateChangeFocusP25(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findInitiativeText(+entity_id, [
      'climate_change_focus_p25',
      'climate_change_focus_p25_html',
    ]);
  }

  @ApiTags('Context')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        challenge_statement_html: { type: 'string' },
      },
    },
  })
  @Patch('context/challenge-statement/save')
  saveChallengeStatement(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveInitiativeText(+entity_id, req, [
      'challenge_statement_html',
    ]);
  }

  @ApiTags('Context')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        measurable_three_year_html: { type: 'string' },
        p25_initiative_model_html: { type: 'string' },
      },
    },
  })
  @Patch('context/measurable-three-year-outcome/save')
  saveMesurableThreeYear(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveInitiativeText(+entity_id, req, [
      'measurable_three_year_html',
      'p25_initiative_model_html',
    ]);
  }

  @ApiTags('Context')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        prior_evaluations_impact_assessments_html: { type: 'string' },
      },
    },
  })
  @Patch('context/prio-evaluation-impact-assessments/save')
  savePrioEvaluationImpactAssessments(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveInitiativeText(+entity_id, req, [
      'prior_evaluations_impact_assessments_html',
    ]);
  }

  @ApiTags('Context')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        priority_setting_html: { type: 'string' },
      },
    },
  })
  @Patch('context/priority-setting/save')
  savePrioritySetting(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveInitiativeText(+entity_id, req, [
      'priority_setting_html',
    ]);
  }

  @ApiTags('Context')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        participatory_desing_process_html: { type: 'string' },
      },
    },
  })
  @Patch('context/participatory-desing-process/save')
  saveParticipatoryDesingProcess(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveInitiativeText(+entity_id, req, [
      'participatory_desing_process_html',
    ]);
  }

  @ApiTags('Context')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        partnerships_html: { type: 'string' },
      },
    },
  })
  @Patch('context/partnerships/save')
  savePartnership(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveInitiativeText(+entity_id, req, [
      'partnerships_html',
    ]);
  }

  @ApiTags('Context')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        portfolio_linkages_html: { type: 'string' },
      },
    },
  })
  @Patch('context/portfolio-linkage/save')
  savePortfolioLinkage(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveInitiativeText(+entity_id, req, [
      'portfolio_linkages_html',
    ]);
  }

  @ApiTags('Portfolio')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        vision_management_approach_html: { type: 'string' },
      },
    },
  })
  @Patch('portfolio/vision-management-approach/save')
  saveVisionManagementApproach(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveInitiativeText(+entity_id, req, [
      'vision_management_approach_html',
    ]);
  }

  @ApiTags('Portfolio')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        scaling_readiness_implementation_html: { type: 'string' },
      },
    },
  })
  @Patch('portfolio/scaling-readiness-implementation/save')
  saveScalingReadinessImplementation(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveInitiativeText(+entity_id, req, [
      'scaling_readiness_implementation_html',
    ]);
  }

  @ApiTags('Gender')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        gender_research_impact_p25_html: { type: 'string' },
      },
    },
  })
  @Patch('gender/research-impact-p25/save')
  saveGenderResearchImpact(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveInitiativeText(+entity_id, req, [
      'gender_research_impact_p25_html',
    ]);
  }

  @ApiTags('Climate')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        gender_research_impact_p25_html: { type: 'string' },
      },
    },
  })
  @Patch('climate/change-focus-p25/save')
  saveClimateChangeFocusP25(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveInitiativeText(+entity_id, req, [
      'climate_change_focus_p25_html',
    ]);
  }
}
