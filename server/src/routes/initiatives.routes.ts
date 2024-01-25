import { Routes } from '@nestjs/core';
import { ClimateModule } from '../domain/entities/climate/climate.module';
import { EntityModule } from '../domain/entities/entity.module';
import { ContextModule } from '../domain/entities/context/context.module';
import { FinancialResourcesModule } from '../domain/entities/financial-resources/financial-resources.module';
import { GenderModule } from '../domain/entities/gender/gender.module';
import { GeneralInformationModule } from '../domain/entities/general-information/general-information.module';
import { InnovationPortfolioModule } from '../domain/entities/innovation-portfolio/innovation-portfolio.module';
import { MeliaModule } from '../domain/entities/melia/melia.module';
import { RiskAssessmentModule } from '../domain/entities/risk-assessment/risk-assessment.module';
import { TheoryOfChangeModule } from '../domain/entities/theory-of-change/theory-of-change.module';
import { PeopleAndCultureModule } from '../domain/entities/people-and-culture/people-and-culture.module';

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
    path: 'people-and-culture',
    module: PeopleAndCultureModule,
  },
  {
    path: 'risk-assessment',
    module: RiskAssessmentModule,
  },
  {
    path: 'theories-of-change',
    module: TheoryOfChangeModule,
  },
];

export const EntityRoustes: Routes = [
  {
    path: 'initiatives',
    module: EntityModule,
    children: children,
  },
];
