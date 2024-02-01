import { Module } from '@nestjs/common';
import { InitiativeDetailsService } from './initiative-details.service';
import { InitiativeDetailsController } from './initiative-details.controller';

@Module({
  controllers: [InitiativeDetailsController],
  providers: [InitiativeDetailsService],
})
export class InitiativeDetailsModule {}
