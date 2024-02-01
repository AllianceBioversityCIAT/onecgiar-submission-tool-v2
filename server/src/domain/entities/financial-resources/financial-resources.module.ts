import { Module } from '@nestjs/common';
import { FinancialResourcesService } from './financial-resources.service';
import { FinancialResourcesController } from './financial-resources.controller';

@Module({
  controllers: [FinancialResourcesController],
  providers: [FinancialResourcesService],
})
export class FinancialResourcesModule {}
