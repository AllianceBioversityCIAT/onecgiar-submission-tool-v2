import { Controller } from '@nestjs/common';
import { MeliaService } from './melia.service';

@Controller()
export class MeliaController {
  constructor(private readonly meliaService: MeliaService) {}
}
