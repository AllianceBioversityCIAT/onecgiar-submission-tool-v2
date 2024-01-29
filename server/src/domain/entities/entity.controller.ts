import { Controller, Get, Query } from '@nestjs/common';
import { EntityService } from './entity.service';
import { ApiTags } from '@nestjs/swagger';

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
}