import { Module } from '@nestjs/common';
import { TheoriesChangeService } from './theories-change.service';
import { TheoriesChangeController } from './theories-change.controller';

@Module({
  controllers: [TheoriesChangeController],
  providers: [TheoriesChangeService],
})
export class TheoriesChangeModule {}
