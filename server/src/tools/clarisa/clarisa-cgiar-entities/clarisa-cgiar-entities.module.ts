import { Module } from '@nestjs/common';
import { ClarisaCgiarEntitiesService } from './clarisa-cgiar-entities.service';
import { ClarisaCgiarEntitiesController } from './clarisa-cgiar-entities.controller';

@Module({
  controllers: [ClarisaCgiarEntitiesController],
  providers: [ClarisaCgiarEntitiesService],
})
export class ClarisaCgiarEntitiesModule {}
