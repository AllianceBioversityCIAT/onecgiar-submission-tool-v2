import { Module } from '@nestjs/common';
import { FlagshipDetailsService } from './flagship-details.service';
import { FlagshipDetailsController } from './flagship-details.controller';

@Module({
  controllers: [FlagshipDetailsController],
  providers: [FlagshipDetailsService],
})
export class FlagshipDetailsModule {}
