import { Controller, Get } from '@nestjs/common';
import { ClarisaCgiarSubEntityTypesService } from './clarisa-cgiar-sub-entity-types.service';
import { ServiceResponseDto } from '../../../domain/shared/global-dto/service-response.dto';
import { ClarisaCgiarSubEntityType } from './entities/clarisa-cgiar-sub-entity-type.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Clarisa')
@Controller()
export class ClarisaCgiarSubEntityTypesController {
  constructor(
    private readonly clarisaCgiarSubEntityTypesService: ClarisaCgiarSubEntityTypesService,
  ) {}

  @Get()
  find(): Promise<ServiceResponseDto<ClarisaCgiarSubEntityType[]>> {
    return this.clarisaCgiarSubEntityTypesService.find();
  }
}
