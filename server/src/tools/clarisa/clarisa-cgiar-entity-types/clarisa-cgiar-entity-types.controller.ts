import { Controller, Get } from '@nestjs/common';
import { ClarisaCgiarEntityTypesService } from './clarisa-cgiar-entity-types.service';
import { ClarisaCgiarEntityType } from './entities/clarisa-cgiar-entity-type.entity';
import { ServiceResponseDto } from '../../../domain/shared/global-dto/service-response.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Clarisa')
@Controller()
export class ClarisaCgiarEntityTypesController {
  constructor(
    private readonly clarisaCgiarEntityTypesService: ClarisaCgiarEntityTypesService,
  ) {}

  @Get()
  find(): Promise<ServiceResponseDto<ClarisaCgiarEntityType[]>> {
    return this.clarisaCgiarEntityTypesService.find();
  }
}
