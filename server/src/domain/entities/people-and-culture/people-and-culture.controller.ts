import { Controller } from '@nestjs/common';
import { PeopleAndCultureService } from './people-and-culture.service';

@Controller()
export class PeopleAndCultureController {
  constructor(
    private readonly peopleAndCultureService: PeopleAndCultureService,
  ) {}
}
