import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContextService } from './context.service';
import { CreateContextDto } from './dto/create-context.dto';
import { UpdateContextDto } from './dto/update-context.dto';

@Controller('context')
export class ContextController {
  constructor(private readonly contextService: ContextService) {}

  @Post()
  create(@Body() createContextDto: CreateContextDto) {
    return this.contextService.create(createContextDto);
  }

  @Get()
  findAll() {
    return this.contextService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contextService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContextDto: UpdateContextDto) {
    return this.contextService.update(+id, updateContextDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contextService.remove(+id);
  }
}
