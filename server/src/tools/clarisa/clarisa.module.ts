import { Module } from '@nestjs/common';
import { ClarisaCgiarEntityTypesModule } from './clarisa-cgiar-entity-types/clarisa-cgiar-entity-types.module';
import { ClarisaTaskService } from './clarisa-task.service';
import { HttpModule } from '@nestjs/axios';
import { ResultsSdgTargetRepository } from '../../db/repositories/clarisa-cgiar-entity-type.repository';
import { ClarisaCgiarSubEntityTypesModule } from './clarisa-cgiar-sub-entity-types/clarisa-cgiar-sub-entity-types.module';

const repository = [ResultsSdgTargetRepository];
@Module({
  imports: [ClarisaCgiarEntityTypesModule, HttpModule, ClarisaCgiarSubEntityTypesModule],
  controllers: [],
  providers: [...repository, ClarisaTaskService],
  exports: [...repository, ClarisaTaskService],
})
export class ClarisaModule {}
