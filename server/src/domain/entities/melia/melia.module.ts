import { Module } from '@nestjs/common';
import { MeliaService } from './melia.service';
import { MeliaController } from './melia.controller';

@Module({
  controllers: [MeliaController],
  providers: [MeliaService],
})
export class MeliaModule {}
