import { Controller, Get } from '@nestjs/common';
import { ClarisaRegionsService } from './clarisa-regions.service';
import {
  ApiBearerAuth,
  ApiCookieAuth,
  ApiHeader,
  ApiTags,
} from '@nestjs/swagger';
import { ServiceResponseDto } from '../../../domain/shared/global-dto/service-response.dto';
import { ClarisaRegion } from './entities/clarisa-region.entity';

@ApiTags('Clarisa')
@ApiBearerAuth()
@ApiHeader({
  name: 'authorization',
  description: 'Bearer Auth Token',
  example: 'Bearer <auth-token>',
})
@Controller()
export class ClarisaRegionsController {
  constructor(private readonly clarisaRegionsService: ClarisaRegionsService) {}

  @Get()
  find(): Promise<ServiceResponseDto<ClarisaRegion[]>> {
    return this.clarisaRegionsService.find();
  }
}
