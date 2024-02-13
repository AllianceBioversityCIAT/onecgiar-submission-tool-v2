import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { EntityService } from './entity.service';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { SaveOverviewDto } from './dto/save-overview.dto';
import { ServiceResponseDto } from '../shared/global-dto/service-response.dto';
import { Entities } from './entities/entities.entity';
import { BodySaveOverviewDoc } from './dto/body-save-overview.doc';
import { CreateBaseEntityDto } from './dto/create-base-entity.dto';

@Controller()
export class EntityController {
  constructor(private readonly initiativesService: EntityService) {}

  @ApiTags('Entity')
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

  @ApiTags('Entity')
  @ApiQuery({ name: 'id', required: false })
  @Get('type/initiatives')
  findInitiativeFull(
    @Query('id') id: string,
  ): Promise<ServiceResponseDto<Entities[]>> {
    return this.initiativesService.findInitiativeFull(+id);
  }

  @ApiTags('Entity')
  @ApiQuery({ name: 'type', required: false })
  @ApiQuery({ name: 'id', required: false })
  @ApiQuery({ name: 'official-code', required: false })
  @ApiQuery({ name: 'active', required: false })
  @Get('base')
  findBaseEntities(
    @Query('type') type: string,
    @Query('id') id: string,
    @Query('official-code') officialCode: string,
    @Query('active') active: string = '1',
  ) {
    return this.initiativesService.findBaseEntities(
      type,
      +id,
      officialCode,
      +active,
    );
  }

  @ApiTags('Overview')
  @Patch(':id([0-9]+)/overview/summary/save')
  @ApiBody({ type: BodySaveOverviewDoc })
  saveOverviewSummary(
    @Body() saveOverviewDto: SaveOverviewDto,
    @Param('id') id: string,
  ): Promise<ServiceResponseDto<Entities>> {
    return this.initiativesService.saveOverviewSummary(+id, saveOverviewDto);
  }

  @ApiTags('Overview')
  @Get(':id([0-9]+)/overview/summary')
  findOverviewSummary(@Param('id') id: string) {
    return this.initiativesService.findOverviewSummary(+id);
  }

  @ApiTags('Overview')
  @ApiBody({
    schema: {
      properties: {
        executive_summary_html: { type: 'string' },
      },
    },
  })
  @Patch(':id([0-9]+)/overview/executive-summary/save')
  saveOverviewExecutiveSummary(
    @Body('executive_summary_html') executive_summary: string,
    @Param('id') entity_id: string,
  ) {
    return this.initiativesService.saveOverviewExecutiveSummary(
      +entity_id,
      executive_summary,
    );
  }

  @ApiTags('Overview')
  @Get(':id([0-9]+)/overview/executive-summary')
  findOverviewExecutiveSummary(@Param('id') id: string) {
    return this.initiativesService.findOverviewExecutiveSummary(+id);
  }

  @ApiTags('Entity')
  @ApiBody({
    schema: {
      properties: {
        name: { type: 'string' },
        short_name: { type: 'string' },
        initiative_detail_obj: {
          properties: { clarisa_primary_action_area_id: { type: 'number' } },
        },
        official_code: { type: 'string' },
      },
    },
  })
  @Post('create/initiative')
  createInitiative(@Body() initiative: CreateBaseEntityDto) {
    return this.initiativesService.createInitiative(initiative);
  }
}
