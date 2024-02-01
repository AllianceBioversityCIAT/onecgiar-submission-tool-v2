import { Injectable } from '@nestjs/common';
import { InitiativeDetailRepository } from '../../../db/repositories/initiative-detail.repository';
import { InitiativeDetail } from './entities/initiative-detail.entity';

@Injectable()
export class InitiativeDetailsService {
  constructor(
    private readonly _initiativeDetailRepository: InitiativeDetailRepository,
  ) {}

  findContextData(
    entity_id: number,
    select: (keyof InitiativeDetail & string)[] = [],
  ) {
    return this._initiativeDetailRepository.findOneSelect(entity_id, select);
  }

  findChallengeStatement(entity_id: number) {
    return this._initiativeDetailRepository.findOneSelect(entity_id, [
      'challenge_statement',
      'challenge_statement_html',
    ]);
  }

  findMeasurableThreeYear(entity_id: number) {
    return this._initiativeDetailRepository.findOneSelect(entity_id, [
      'measurable_three_year',
      'measurable_three_year_html',
      'p25_initiative_model',
      'p25_initiative_model_html',
    ]);
  }

  findPriorEvaluationsIpact(entity_id: number) {
    return this._initiativeDetailRepository.findOneSelect(entity_id, [
      'prior_evaluations_impact_assessments',
      'prior_evaluations_impact_assessments_html',
    ]);
  }

  findPrioritySettings(entity_id: number) {
    return this._initiativeDetailRepository.findOneSelect(entity_id, [
      'priority_setting',
      'priority_setting_html',
    ]);
  }

  findParticipatoryDesign(entity_id: number) {
    return this._initiativeDetailRepository.findOneSelect(entity_id, [
      'participatory_desing_process',
      'participatory_desing_process_html',
    ]);
  }

  findPortfolioLinkage(entity_id: number) {
    return this._initiativeDetailRepository.findOneSelect(entity_id, [
      'portfolio_linkages',
      'portfolio_linkages_html',
    ]);
  }
}
