import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PeopleAndCultureService } from './people-and-culture.service';
import { CreatePeopleAndCultureDto } from './dto/create-people-and-culture.dto';
import { UpdatePeopleAndCultureDto } from './dto/update-people-and-culture.dto';

@Controller()
export class PeopleAndCultureController {
  constructor(
    private readonly peopleAndCultureService: PeopleAndCultureService,
  ) {}

  @Post()
  create(@Body() createPeopleAndCultureDto: CreatePeopleAndCultureDto) {
    return this.peopleAndCultureService.create(createPeopleAndCultureDto);
  }

  @Get()
  findAll() {
    return this.peopleAndCultureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peopleAndCultureService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePeopleAndCultureDto: UpdatePeopleAndCultureDto,
  ) {
    return this.peopleAndCultureService.update(+id, updatePeopleAndCultureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peopleAndCultureService.remove(+id);
  }
}
