import { Module } from '@nestjs/common';
import { GeneralInformationService } from './general-information.service';
import { GeneralInformationController } from './general-information.controller';

@Module({
  controllers: [GeneralInformationController],
  providers: [GeneralInformationService],
})
export class GeneralInformationModule {}
