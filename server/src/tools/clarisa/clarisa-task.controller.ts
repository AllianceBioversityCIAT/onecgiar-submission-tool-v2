import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ClarisaTaskService } from './clarisa-task.service';
import { ResponseUtils } from '../../domain/shared/utils/response.utils';

@Controller()
export class ClarisaTaskController {
  constructor(private readonly clarisaTaskService: ClarisaTaskService) {}

  @Get('task')
  getClarisaTask() {
    this.clarisaTaskService.bootstrap();
    return ResponseUtils.format({
      message: 'Clarisa Task is running right now!',
      status: HttpStatus.OK,
      data: 'Clarisa Task',
    });
  }
}
