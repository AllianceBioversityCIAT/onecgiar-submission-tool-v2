import { Controller, Get } from '@nestjs/common';
import { ClarisaActionAreasService } from './clarisa-action-areas.service';
import { ServiceResponseDto } from '../../../domain/shared/global-dto/service-response.dto';
import { ClarisaActionArea } from './entities/clarisa-action-area.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Clarisa')
@Controller()
export class ClarisaActionAreasController {
  constructor(
    private readonly clarisaActionAreasService: ClarisaActionAreasService,
  ) {}

  @Get()
  find(): Promise<ServiceResponseDto<ClarisaActionArea[]>> {
    return this.clarisaActionAreasService.find();
  }
}
