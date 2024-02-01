import { Controller } from '@nestjs/common';
import { GenderService } from './gender.service';

@Controller()
export class GenderController {
  constructor(private readonly genderService: GenderService) {}
}
