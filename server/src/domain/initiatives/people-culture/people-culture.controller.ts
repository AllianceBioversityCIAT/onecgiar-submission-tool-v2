import { Controller } from '@nestjs/common';
import { PeopleCultureService } from './people-culture.service';

@Controller()
export class PeopleCultureController {
  constructor(private readonly peopleCultureService: PeopleCultureService) {}
}
