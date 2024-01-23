import { Module } from '@nestjs/common';
import { TheoryOfChangeService } from './theory-of-change.service';
import { TheoryOfChangeController } from './theory-of-change.controller';

@Module({
  controllers: [TheoryOfChangeController],
  providers: [TheoryOfChangeService],
})
export class TheoryOfChangeModule {}
