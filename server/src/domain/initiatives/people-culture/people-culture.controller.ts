import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeopleCultureService } from './people-culture.service';
import { CreatePeopleCultureDto } from './dto/create-people-culture.dto';
import { UpdatePeopleCultureDto } from './dto/update-people-culture.dto';

@Controller('people-culture')
export class PeopleCultureController {
  constructor(private readonly peopleCultureService: PeopleCultureService) {}

  @Post()
  create(@Body() createPeopleCultureDto: CreatePeopleCultureDto) {
    return this.peopleCultureService.create(createPeopleCultureDto);
  }

  @Get()
  findAll() {
    return this.peopleCultureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peopleCultureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePeopleCultureDto: UpdatePeopleCultureDto) {
    return this.peopleCultureService.update(+id, updatePeopleCultureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peopleCultureService.remove(+id);
  }
}
