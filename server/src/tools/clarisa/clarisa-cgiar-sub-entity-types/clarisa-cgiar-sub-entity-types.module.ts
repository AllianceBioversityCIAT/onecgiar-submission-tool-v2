import { Module } from '@nestjs/common';
import { ClarisaCgiarSubEntityTypesService } from './clarisa-cgiar-sub-entity-types.service';
import { ClarisaCgiarSubEntityTypesController } from './clarisa-cgiar-sub-entity-types.controller';

@Module({
  controllers: [ClarisaCgiarSubEntityTypesController],
  providers: [ClarisaCgiarSubEntityTypesService],
})
export class ClarisaCgiarSubEntityTypesModule {}
