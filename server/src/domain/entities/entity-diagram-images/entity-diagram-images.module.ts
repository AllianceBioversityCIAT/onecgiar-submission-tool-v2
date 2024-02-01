import { Module } from '@nestjs/common';
import { EntityDiagramImagesService } from './entity-diagram-images.service';
import { EntityDiagramImagesController } from './entity-diagram-images.controller';

@Module({
  controllers: [EntityDiagramImagesController],
  providers: [EntityDiagramImagesService],
})
export class EntityDiagramImagesModule {}
