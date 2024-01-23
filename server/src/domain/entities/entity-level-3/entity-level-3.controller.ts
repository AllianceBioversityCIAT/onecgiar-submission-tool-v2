import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntityLevel3Service } from './entity-level-3.service';
import { CreateEntityLevel3Dto } from './dto/create-entity-level-3.dto';
import { UpdateEntityLevel3Dto } from './dto/update-entity-level-3.dto';

@Controller('entity-level-3')
export class EntityLevel3Controller {
  constructor(private readonly entityLevel3Service: EntityLevel3Service) {}

  @Post()
  create(@Body() createEntityLevel3Dto: CreateEntityLevel3Dto) {
    return this.entityLevel3Service.create(createEntityLevel3Dto);
  }

  @Get()
  findAll() {
    return this.entityLevel3Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entityLevel3Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntityLevel3Dto: UpdateEntityLevel3Dto) {
    return this.entityLevel3Service.update(+id, updateEntityLevel3Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entityLevel3Service.remove(+id);
  }
}
