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
import { PeopleAndCultureModule } from './people-and-culture/people-and-culture.module';
import { TheoryOfChangeModule } from './theory-of-change/theory-of-change.module';
import { UserRoleEntitiesModule } from './user-role-entities/user-role-entities.module';
import { EntityCentersModule } from './entity-centers/entity-centers.module';
import { EntityImpactAreasModule } from './entity-impact-areas/entity-impact-areas.module';
import { EntityDiagramImagesModule } from './entity-diagram-images/entity-diagram-images.module';
import { EntitiesRepository } from '../../db/repositories/entities.repository';
import { InitiativeDetailsModule } from './initiative-details/initiative-details.module';
import { FlagshipDetailsModule } from './flagship-details/flagship-details.module';
import { WorkPackageDetailsModule } from './work-package-details/work-package-details.module';

@Module({
  controllers: [EntityController],
  providers: [EntityService, EntitiesRepository],
  imports: [
    GeneralInformationModule,
    ContextModule,
    InnovationPortfolioModule,
    GenderModule,
    ClimateModule,
    MeliaModule,
    RiskAssessmentModule,
    FinancialResourcesModule,
    PeopleAndCultureModule,
    TheoryOfChangeModule,
    UserRoleEntitiesModule,
    EntityCentersModule,
    EntityImpactAreasModule,
    EntityDiagramImagesModule,
    InitiativeDetailsModule,
    FlagshipDetailsModule,
    WorkPackageDetailsModule,
  ],
  exports: [EntitiesRepository],
})
export class EntityModule {}
