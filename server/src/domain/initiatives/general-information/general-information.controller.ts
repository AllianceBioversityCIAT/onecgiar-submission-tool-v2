import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeneralInformationService } from './general-information.service';
import { CreateGeneralInformationDto } from './dto/create-general-information.dto';
import { UpdateGeneralInformationDto } from './dto/update-general-information.dto';

@Controller('general-information')
export class GeneralInformationController {
  constructor(private readonly generalInformationService: GeneralInformationService) {}

  @Post()
  create(@Body() createGeneralInformationDto: CreateGeneralInformationDto) {
    return this.generalInformationService.create(createGeneralInformationDto);
  }

  @Get()
  findAll() {
    return this.generalInformationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generalInformationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneralInformationDto: UpdateGeneralInformationDto) {
    return this.generalInformationService.update(+id, updateGeneralInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generalInformationService.remove(+id);
  }
}
