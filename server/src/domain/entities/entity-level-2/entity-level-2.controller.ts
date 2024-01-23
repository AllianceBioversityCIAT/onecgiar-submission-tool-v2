import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityLevel2Service } from './entity-level-2.service';
import { CreateEntityLevel2Dto } from './dto/create-entity-level-2.dto';
import { UpdateEntityLevel2Dto } from './dto/update-entity-level-2.dto';

@Controller('entity-level-2')
export class EntityLevel2Controller {
  constructor(private readonly entityLevel2Service: EntityLevel2Service) {}

  @Post()
  create(@Body() createEntityLevel2Dto: CreateEntityLevel2Dto) {
    return this.entityLevel2Service.create(createEntityLevel2Dto);
  }

  @Get()
  findAll() {
    return this.entityLevel2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entityLevel2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntityLevel2Dto: UpdateEntityLevel2Dto) {
    return this.entityLevel2Service.update(+id, updateEntityLevel2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityLevel2Service.remove(+id);
  }
}
