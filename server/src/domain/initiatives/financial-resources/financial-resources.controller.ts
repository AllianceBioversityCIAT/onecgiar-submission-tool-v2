import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FinancialResourcesService } from './financial-resources.service';
import { CreateFinancialResourceDto } from './dto/create-financial-resource.dto';
import { UpdateFinancialResourceDto } from './dto/update-financial-resource.dto';

@Controller()
export class FinancialResourcesController {
  constructor(
    private readonly financialResourcesService: FinancialResourcesService,
  ) {}

  @Post()
  create(@Body() createFinancialResourceDto: CreateFinancialResourceDto) {
    return this.financialResourcesService.create(createFinancialResourceDto);
  }

  @Get()
  findAll() {
    return this.financialResourcesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financialResourcesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFinancialResourceDto: UpdateFinancialResourceDto,
  ) {
    return this.financialResourcesService.update(
      +id,
      updateFinancialResourceDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financialResourcesService.remove(+id);
  }
}
