import { Module } from '@nestjs/common';
import { ClarisaCgiarEntityTypesModule } from './clarisa-cgiar-entity-types/clarisa-cgiar-entity-types.module';
import { ClarisaTaskService } from './clarisa-task.service';
import { HttpModule } from '@nestjs/axios';
import { ResultsSdgTargetRepository } from '../../db/repositories/clarisa-cgiar-entity-type.repository';
import { ClarisaActionAreasModule } from './clarisa-action-areas/clarisa-action-areas.module';
import { ClarisaTaskController } from './clarisa-task.controller';
import { ClarisaCountriesModule } from './clarisa-countries/clarisa-countries.module';
import { ClarisaRegionsModule } from './clarisa-regions/clarisa-regions.module';
import { ClarisaCgiarEntitiesModule } from './clarisa-cgiar-entities/clarisa-cgiar-entities.module';
import { ClarisaImpactAreasModule } from './clarisa-impact-areas/clarisa-impact-areas.module';

const repository = [ResultsSdgTargetRepository];
@Module({
  imports: [
    ClarisaCgiarEntityTypesModule,
    HttpModule,
    ClarisaActionAreasModule,
    ClarisaCountriesModule,
    ClarisaRegionsModule,
    ClarisaCgiarEntitiesModule,
    ClarisaImpactAreasModule,
  ],
  controllers: [ClarisaTaskController],
  providers: [...repository, ClarisaTaskService],
  exports: [...repository, ClarisaTaskService],
})
export class ClarisaModule {}
