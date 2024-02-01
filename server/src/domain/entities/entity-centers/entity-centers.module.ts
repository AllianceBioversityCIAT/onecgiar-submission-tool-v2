import { Module } from '@nestjs/common';
import { EntityCentersService } from './entity-centers.service';
import { EntityCentersController } from './entity-centers.controller';

@Module({
  controllers: [EntityCentersController],
  providers: [EntityCentersService],
})
export class EntityCentersModule {}
