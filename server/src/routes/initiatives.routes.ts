import { Routes } from '@nestjs/core';
import { ClimateModule } from '../domain/initiatives/climate/climate.module';
import { InitiativesModule } from '../domain/initiatives/initiatives.module';
import { ContextModule } from '../domain/initiatives/context/context.module';
import { FinancialResourcesModule } from '../domain/initiatives/financial-resources/financial-resources.module';
import { GenderModule } from '../domain/initiatives/gender/gender.module';
import { GeneralInformationModule } from '../domain/initiatives/general-information/general-information.module';
import { InnovationPortfolioModule } from '../domain/initiatives/innovation-portfolio/innovation-portfolio.module';
import { MeliaModule } from '../domain/initiatives/melia/melia.module';
import { PeopleCultureModule } from '../domain/initiatives/people-culture/people-culture.module';
import { RiskAssessmentModule } from '../domain/initiatives/risk-assessment/risk-assessment.module';
import { TheoriesChangeModule } from '../domain/initiatives/theories-change/theories-change.module';

const children: Routes = [
  {
    path: 'climate',
    module: ClimateModule,
  },
  {
    path: 'context',
    module: ContextModule,
  },
  {
    path: 'financial-resources',
    module: FinancialResourcesModule,
  },
  {
    path: 'gender',
    module: GenderModule,
  },
  {
    path: 'general-information',
    module: GeneralInformationModule,
  },
  {
    path: 'innovation-portofolio',
    module: InnovationPortfolioModule,
  },
  {
    path: 'melia',
    module: MeliaModule,
  },
  {
    path: 'people-culture',
    module: PeopleCultureModule,
  },
  {
    path: 'risk-assessment',
    module: RiskAssessmentModule,
  },
  {
    path: 'theories-change',
    module: TheoriesChangeModule,
  },
];

export const InitiativesRoustes: Routes = [
  {
    path: 'initiatives',
    module: InitiativesModule,
    children: children,
  },
];
