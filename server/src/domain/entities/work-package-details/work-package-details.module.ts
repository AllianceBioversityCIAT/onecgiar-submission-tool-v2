import { Module } from '@nestjs/common';
import { WorkPackageDetailsService } from './work-package-details.service';
import { WorkPackageDetailsController } from './work-package-details.controller';

@Module({
  controllers: [WorkPackageDetailsController],
  providers: [WorkPackageDetailsService],
})
export class WorkPackageDetailsModule {}
