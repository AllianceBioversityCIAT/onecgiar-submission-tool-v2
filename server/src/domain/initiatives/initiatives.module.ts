import { Module } from '@nestjs/common';
import { InitiativesService } from './initiatives.service';
import { InitiativesController } from './initiatives.controller';
import { GeneralInformationModule } from './general-information/general-information.module';
import { ContextModule } from './context/context.module';
import { TheoriesChangeModule } from './theories-change/theories-change.module';
import { InnovationPortfolioModule } from './innovation-portfolio/innovation-portfolio.module';
import { GenderModule } from './gender/gender.module';
import { ClimateModule } from './climate/climate.module';
import { MeliaModule } from './melia/melia.module';
import { RiskAssessmentModule } from './risk-assessment/risk-assessment.module';
import { PeopleCultureModule } from './people-culture/people-culture.module';
import { FinancialResourcesModule } from './financial-resources/financial-resources.module';

@Module({
  controllers: [InitiativesController],
  providers: [InitiativesService],
  imports: [GeneralInformationModule, ContextModule, TheoriesChangeModule, InnovationPortfolioModule, GenderModule, ClimateModule, MeliaModule, RiskAssessmentModule, PeopleCultureModule, FinancialResourcesModule],
})
export class InitiativesModule {}
