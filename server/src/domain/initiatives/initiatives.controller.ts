import { Controller } from '@nestjs/common';
import { InitiativesService } from './initiatives.service';

@Controller()
export class InitiativesController {
  constructor(private readonly initiativesService: InitiativesService) {}
}
