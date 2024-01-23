import { Module } from '@nestjs/common';
import { ClarisaCgiarEntityTypesModule } from './clarisa-cgiar-entity-types/clarisa-cgiar-entity-types.module';

@Module({
  imports: [ClarisaCgiarEntityTypesModule],
  controllers: [],
  providers: [],
})
export class ClarisaModule {}
