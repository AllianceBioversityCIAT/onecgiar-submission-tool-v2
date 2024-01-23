import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TheoryOfChangeService } from './theory-of-change.service';
import { CreateTheoryOfChangeDto } from './dto/create-theory-of-change.dto';
import { UpdateTheoryOfChangeDto } from './dto/update-theory-of-change.dto';

@Controller()
export class TheoryOfChangeController {
  constructor(private readonly theoryOfChangeService: TheoryOfChangeService) {}

  @Post()
  create(@Body() createTheoryOfChangeDto: CreateTheoryOfChangeDto) {
    return this.theoryOfChangeService.create(createTheoryOfChangeDto);
  }

  @Get()
  findAll() {
    return this.theoryOfChangeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.theoryOfChangeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTheoryOfChangeDto: UpdateTheoryOfChangeDto,
  ) {
    return this.theoryOfChangeService.update(+id, updateTheoryOfChangeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.theoryOfChangeService.remove(+id);
  }
}
