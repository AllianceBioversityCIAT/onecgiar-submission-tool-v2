import { Module } from '@nestjs/common';
import { ClarisaRegionsService } from './clarisa-regions.service';
import { ClarisaRegionsController } from './clarisa-regions.controller';

@Module({
  controllers: [ClarisaRegionsController],
  providers: [ClarisaRegionsService],
})
export class ClarisaRegionsModule {}
