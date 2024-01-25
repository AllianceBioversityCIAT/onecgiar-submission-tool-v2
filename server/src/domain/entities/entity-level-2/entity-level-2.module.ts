import { Module } from '@nestjs/common';
import { EntityLevel2Service } from './entity-level-2.service';
import { EntityLevel2Controller } from './entity-level-2.controller';

@Module({
  controllers: [EntityLevel2Controller],
  providers: [EntityLevel2Service],
})
export class EntityLevel2Module {}
