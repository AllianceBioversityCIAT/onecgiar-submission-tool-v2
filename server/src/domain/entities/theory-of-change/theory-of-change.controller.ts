import { Controller } from '@nestjs/common';
import { TheoryOfChangeService } from './theory-of-change.service';

@Controller()
export class TheoryOfChangeController {
  constructor(private readonly theoryOfChangeService: TheoryOfChangeService) {}
}
