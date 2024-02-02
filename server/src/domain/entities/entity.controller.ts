import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { EntityService } from './entity.service';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { saveOverviewDto } from './dto/save-overview.dto';
import { ServiceResponseDto } from '../shared/global-dto/service-response.dto';
import { Entities } from './entities/entities.entity';
import { get } from 'http';
import { InitiativeDetail } from './initiative-details/entities/initiative-detail.entity';
import { BodySaveOverviewDoc } from './dto/body-save-overview.doc';

@ApiTags('Entity')
@Controller()
export class EntityController {
  constructor(private readonly initiativesService: EntityService) {}

  @ApiQuery({ name: 'type', required: false })
  @ApiQuery({ name: 'id', required: false })
  @ApiQuery({ name: 'official-code', required: false })
  @ApiQuery({ name: 'active', required: false })
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

  @Patch(':id([0-9]+)/overview-summary/save')
  @ApiBody({ type: BodySaveOverviewDoc })
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

  @Patch(':id([0-9]+)/overview-executive-summary/save')
  @ApiBody({ type: InitiativeDetail })
  saveOverviewExecutiveSummary(
    @Body('executive_summary_html') executive_summary: string,
    @Param('id') entity_id: string,
  ) {
    return this.initiativesService.saveOverviewExecutiveSummary(
      +entity_id,
      executive_summary,
    );
  }

  @Get(':id([0-9]+)/overview-executive-summary')
  findOverviewExecutiveSummary(@Param('id') id: string) {
    return this.initiativesService.findOverviewExecutiveSummary(+id);
  }
}
