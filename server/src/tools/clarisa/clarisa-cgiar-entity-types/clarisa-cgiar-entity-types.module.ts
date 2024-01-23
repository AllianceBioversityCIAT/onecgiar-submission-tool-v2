import { Module } from '@nestjs/common';
import { ClarisaCgiarEntityTypesService } from './clarisa-cgiar-entity-types.service';
import { ClarisaCgiarEntityTypesController } from './clarisa-cgiar-entity-types.controller';

@Module({
  controllers: [ClarisaCgiarEntityTypesController],
  providers: [ClarisaCgiarEntityTypesService],
})
export class ClarisaCgiarEntityTypesModule {}
