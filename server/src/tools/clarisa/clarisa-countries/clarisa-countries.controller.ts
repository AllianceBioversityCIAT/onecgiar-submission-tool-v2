import { Controller, Get } from '@nestjs/common';
import { ClarisaCountriesService } from './clarisa-countries.service';
import { ClarisaCountry } from './entities/clarisa-country.entity';
import { ServiceResponseDto } from '../../../domain/shared/global-dto/service-response.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Clarisa')
@Controller()
export class ClarisaCountriesController {
  constructor(
    private readonly clarisaCountriesService: ClarisaCountriesService,
  ) {}

  @Get()
  find(): Promise<ServiceResponseDto<ClarisaCountry[]>> {
    return this.clarisaCountriesService.find();
  }
}
