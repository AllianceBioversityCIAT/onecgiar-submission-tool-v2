import { Controller, Get } from '@nestjs/common';
import { ClarisaCgiarEntitiesService } from './clarisa-cgiar-entities.service';
import { ServiceResponseDto } from '../../../domain/shared/global-dto/service-response.dto';
import { ClarisaCgiarEntity } from './entities/clarisa-cgiar-entity.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Clarisa')
@Controller()
export class ClarisaCgiarEntitiesController {
  constructor(
    private readonly clarisaCgiarEntitiesService: ClarisaCgiarEntitiesService,
  ) {}

  @Get()
  find(): Promise<ServiceResponseDto<ClarisaCgiarEntity[]>> {
    return this.clarisaCgiarEntitiesService.find();
  }
}
