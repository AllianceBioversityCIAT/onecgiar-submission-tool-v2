import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { ClimateService } from './climate.service';
import { CreateClimateDto } from './dto/create-climate.dto';
import { UpdateClimateDto } from './dto/update-climate.dto';
import { ServiceResponseDto } from '../../shared/global-dto/service-response.dto';

@Controller()
export class ClimateController {
  constructor(private readonly climateService: ClimateService) {}

  @Post()
  create(
    @Body() createClimateDto: CreateClimateDto,
  ): Promise<ServiceResponseDto<string>> {
    return this.climateService.create(createClimateDto);
  }

  @Get()
  findAll() {
    return this.climateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.climateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClimateDto: UpdateClimateDto) {
    return this.climateService.update(+id, updateClimateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.climateService.remove(+id);
  }
}
