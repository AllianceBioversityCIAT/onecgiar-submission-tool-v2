import { Module } from '@nestjs/common';
import { ClarisaCronsService } from './clarisa.cron';
import { ClarisaModule } from '../clarisa/clarisa.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ClarisaModule, HttpModule],
  controllers: [],
  providers: [ClarisaCronsService],
})
export class CronJobModule {}
