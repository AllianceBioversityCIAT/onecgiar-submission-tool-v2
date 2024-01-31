import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EntityService } from './entity.service';
import { ApiTags } from '@nestjs/swagger';
import { saveOverviewDto } from './dto/save-overview.dto';
import { ServiceResponseDto } from '../shared/global-dto/service-response.dto';
import { Entities } from './entities/entities.entity';

@ApiTags('Entity')
@Controller()
export class EntityController {
  constructor(private readonly initiativesService: EntityService) {}

  @Get()
  findEntities(
    @Query('type') type: string,
    @Query('id') id: string,
    @Query('official-code') officialCode: string,
    @Query('active') active: string = '1',
  ) {
    return this.initiativesService.findEntities(
      type,
      +id,
      officialCode,
      +active,
    );
  }

  @Post(':id([0-9]+)/overview-summary/save')
  saveOverviewSummary(
    @Body() saveOverviewDto: saveOverviewDto,
    @Param('id') id: string,
  ): Promise<ServiceResponseDto<Entities>> {
    return this.initiativesService.saveOverviewSummary(+id, saveOverviewDto);
  }

  @Get(':id([0-9]+)/overview-summary')
  findOverviewSummary(@Param('id') id: string) {
    return this.initiativesService.findOverviewSummary(+id);
  }
}
