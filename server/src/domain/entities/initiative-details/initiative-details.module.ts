import { Module } from '@nestjs/common';
import { InitiativeDetailsService } from './initiative-details.service';
import { InitiativeDetailsController } from './initiative-details.controller';
import { InitiativeDetailRepository } from '../../../db/repositories/initiative-detail.repository';

@Module({
  controllers: [InitiativeDetailsController],
  providers: [InitiativeDetailsService, InitiativeDetailRepository],
  exports: [InitiativeDetailRepository],
})
export class InitiativeDetailsModule {}
