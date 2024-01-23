import { Controller } from '@nestjs/common';
import { TheoriesChangeService } from './theories-change.service';

@Controller()
export class TheoriesChangeController {
  constructor(private readonly theoriesChangeService: TheoriesChangeService) {}
}
