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
  @Get('challenge-statement')
  findChallengeStatement(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findContextData(+entity_id, [
      'challenge_statement',
      'challenge_statement_html',
    ]);
  }

  @ApiTags('Context')
  @Get('measurable-three-year-outcome')
  findMesurableThreeYear(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findContextData(+entity_id, [
      'measurable_three_year',
      'measurable_three_year_html',
      'p25_initiative_model',
      'p25_initiative_model_html',
    ]);
  }

  @ApiTags('Context')
  @Get('prio-evaluation-impact-assessments')
  findPrioEvaluationImpactAssessments(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findContextData(+entity_id, [
      'prior_evaluations_impact_assessments',
      'prior_evaluations_impact_assessments_html',
    ]);
  }

  @ApiTags('Context')
  @Get('priority-setting')
  findPrioritySetting(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findContextData(+entity_id, [
      'priority_setting',
      'priority_setting_html',
    ]);
  }

  @ApiTags('Context')
  @Get('participatory-desing-process')
  findParticipatoryDesingProcess(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findContextData(+entity_id, [
      'participatory_desing_process',
      'participatory_desing_process_html',
    ]);
  }

  @ApiTags('Context')
  @Get('partnerships')
  findPartnership(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findContextData(+entity_id, [
      'partnerships',
      'partnerships_html',
    ]);
  }

  @ApiTags('Context')
  @Get('portfolio-linkage')
  findPortfolioLinkage(@Param('id') entity_id: string) {
    return this.initiativeDetailsService.findContextData(+entity_id, [
      'portfolio_linkages',
      'portfolio_linkages_html',
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
  @Patch('challenge-statement/save')
  saveChallengeStatement(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveContexData(+entity_id, req, [
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
  @Patch('measurable-three-year-outcome/save')
  saveMesurableThreeYear(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveContexData(+entity_id, req, [
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
  @Patch('prio-evaluation-impact-assessments/save')
  savePrioEvaluationImpactAssessments(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveContexData(+entity_id, req, [
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
  @Patch('priority-setting/save')
  savePrioritySetting(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveContexData(+entity_id, req, [
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
  @Patch('participatory-desing-process/save')
  saveParticipatoryDesingProcess(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveContexData(+entity_id, req, [
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
  @Patch('partnerships/save')
  savePartnership(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveContexData(+entity_id, req, [
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
  @Patch('portfolio-linkage/save')
  savePortfolioLinkage(
    @Param('id') entity_id: string,
    @Body() req: Partial<InitiativeDetail>,
  ) {
    return this.initiativeDetailsService.saveContexData(+entity_id, req, [
      'portfolio_linkages_html',
    ]);
  }
}
