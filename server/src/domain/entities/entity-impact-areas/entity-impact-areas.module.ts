import { Module } from '@nestjs/common';
import { EntityImpactAreasService } from './entity-impact-areas.service';
import { EntityImpactAreasController } from './entity-impact-areas.controller';

@Module({
  controllers: [EntityImpactAreasController],
  providers: [EntityImpactAreasService],
})
export class EntityImpactAreasModule {}
