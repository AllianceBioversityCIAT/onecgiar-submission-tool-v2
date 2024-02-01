import { Controller, Get } from '@nestjs/common';
import { ClarisaImpactAreasService } from './clarisa-impact-areas.service';
import { ApiTags } from '@nestjs/swagger';
import { ServiceResponseDto } from '../../../domain/shared/global-dto/service-response.dto';
import { ClarisaImpactArea } from './entities/clarisa-impact-area.entity';

@ApiTags('Clarisa')
@Controller()
export class ClarisaImpactAreasController {
  constructor(
    private readonly clarisaImpactAreasService: ClarisaImpactAreasService,
  ) {}

  @Get()
  find(): Promise<ServiceResponseDto<ClarisaImpactArea[]>> {
    return this.clarisaImpactAreasService.find();
  }
}
