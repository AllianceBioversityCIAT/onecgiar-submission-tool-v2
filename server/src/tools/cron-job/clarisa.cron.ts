import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ClarisaTaskService } from '../clarisa/clarisa-task.service';

@Injectable()
export class ClarisaCronsService {
  constructor(private readonly _clarisaTaskService: ClarisaTaskService) {}

  //TODO: Cron still not working
  @Cron(CronExpression.EVERY_8_HOURS, { name: 'clarisa' })
  handleCron() {
    this._clarisaTaskService.bootstrap();
  }
}
