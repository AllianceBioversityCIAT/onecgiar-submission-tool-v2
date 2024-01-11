import { Module } from '@nestjs/common';
import { ClimateService } from './climate.service';
import { ClimateController } from './climate.controller';

@Module({
  controllers: [ClimateController],
  providers: [ClimateService],
})
export class ClimateModule {}
