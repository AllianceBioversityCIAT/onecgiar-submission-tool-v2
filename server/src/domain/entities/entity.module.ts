import { Module } from '@nestjs/common';
import { EntityService } from './entity.service';
import { EntityController } from './entity.controller';
import { GeneralInformationModule } from './general-information/general-information.module';
import { ContextModule } from './context/context.module';
import { InnovationPortfolioModule } from './innovation-portfolio/innovation-portfolio.module';
import { GenderModule } from './gender/gender.module';
import { ClimateModule } from './climate/climate.module';
import { MeliaModule } from './melia/melia.module';
import { RiskAssessmentModule } from './risk-assessment/risk-assessment.module';
import { FinancialResourcesModule } from './financial-resources/financial-resources.module';
import { EntityLevel2Module } from './entity-level-2/entity-level-2.module';
import { EntityLevel3Module } from './entity-level-3/entity-level-3.module';
import { PeopleAndCultureModule } from './people-and-culture/people-and-culture.module';
import { TheoryOfChangeModule } from './theory-of-change/theory-of-change.module';
import { UserRoleEntitiesModule } from './user-role-entities/user-role-entities.module';
import { EntityCentersModule } from './entity-centers/entity-centers.module';
import { EntityImpactAreasModule } from './entity-impact-areas/entity-impact-areas.module';
import { EntityDiagramImagesModule } from './entity-diagram-images/entity-diagram-images.module';

@Module({
  controllers: [EntityController],
  providers: [EntityService],
  imports: [
    GeneralInformationModule,
    ContextModule,
    InnovationPortfolioModule,
    GenderModule,
    ClimateModule,
    MeliaModule,
    RiskAssessmentModule,
    FinancialResourcesModule,
    EntityLevel2Module,
    EntityLevel3Module,
    PeopleAndCultureModule,
    TheoryOfChangeModule,
    UserRoleEntitiesModule,
    EntityCentersModule,
    EntityImpactAreasModule,
    EntityDiagramImagesModule,
  ],
})
export class EntityModule {}
