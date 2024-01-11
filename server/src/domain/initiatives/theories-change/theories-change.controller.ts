import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TheoriesChangeService } from './theories-change.service';
import { CreateTheoriesChangeDto } from './dto/create-theories-change.dto';
import { UpdateTheoriesChangeDto } from './dto/update-theories-change.dto';

@Controller('theories-change')
export class TheoriesChangeController {
  constructor(private readonly theoriesChangeService: TheoriesChangeService) {}

  @Post()
  create(@Body() createTheoriesChangeDto: CreateTheoriesChangeDto) {
    return this.theoriesChangeService.create(createTheoriesChangeDto);
  }

  @Get()
  findAll() {
    return this.theoriesChangeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.theoriesChangeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTheoriesChangeDto: UpdateTheoriesChangeDto) {
    return this.theoriesChangeService.update(+id, updateTheoriesChangeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.theoriesChangeService.remove(+id);
  }
}
