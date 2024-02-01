import { Controller } from '@nestjs/common';
import { WorkPackageDetailsService } from './work-package-details.service';

@Controller('work-package-details')
export class WorkPackageDetailsController {
  constructor(
    private readonly workPackageDetailsService: WorkPackageDetailsService,
  ) {}
}
