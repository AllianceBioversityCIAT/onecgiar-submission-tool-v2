import { Module } from '@nestjs/common';
import { EntityLevel3Service } from './entity-level-3.service';
import { EntityLevel3Controller } from './entity-level-3.controller';

@Module({
  controllers: [EntityLevel3Controller],
  providers: [EntityLevel3Service],
})
export class EntityLevel3Module {}
