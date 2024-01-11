import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeliaService } from './melia.service';
import { CreateMeliaDto } from './dto/create-melia.dto';
import { UpdateMeliaDto } from './dto/update-melia.dto';

@Controller('melia')
export class MeliaController {
  constructor(private readonly meliaService: MeliaService) {}

  @Post()
  create(@Body() createMeliaDto: CreateMeliaDto) {
    return this.meliaService.create(createMeliaDto);
  }

  @Get()
  findAll() {
    return this.meliaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meliaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeliaDto: UpdateMeliaDto) {
    return this.meliaService.update(+id, updateMeliaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meliaService.remove(+id);
  }
}
