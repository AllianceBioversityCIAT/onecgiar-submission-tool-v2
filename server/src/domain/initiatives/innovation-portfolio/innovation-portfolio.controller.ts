import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InnovationPortfolioService } from './innovation-portfolio.service';
import { CreateInnovationPortfolioDto } from './dto/create-innovation-portfolio.dto';
import { UpdateInnovationPortfolioDto } from './dto/update-innovation-portfolio.dto';

@Controller()
export class InnovationPortfolioController {
  constructor(
    private readonly innovationPortfolioService: InnovationPortfolioService,
  ) {}

  @Post()
  create(@Body() createInnovationPortfolioDto: CreateInnovationPortfolioDto) {
    return this.innovationPortfolioService.create(createInnovationPortfolioDto);
  }

  @Get()
  findAll() {
    return this.innovationPortfolioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.innovationPortfolioService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInnovationPortfolioDto: UpdateInnovationPortfolioDto,
  ) {
    return this.innovationPortfolioService.update(
      +id,
      updateInnovationPortfolioDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.innovationPortfolioService.remove(+id);
  }
}
