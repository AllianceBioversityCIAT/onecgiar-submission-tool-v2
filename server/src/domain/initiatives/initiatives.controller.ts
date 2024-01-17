import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InitiativesService } from './initiatives.service';
import { CreateInitiativeDto } from './dto/create-initiative.dto';
import { UpdateInitiativeDto } from './dto/update-initiative.dto';

@Controller()
export class InitiativesController {
  constructor(private readonly initiativesService: InitiativesService) {}

  @Post()
  create(@Body() createInitiativeDto: CreateInitiativeDto) {
    return this.initiativesService.create(createInitiativeDto);
  }

  @Get()
  findAll() {
    return this.initiativesService.findAll();
  }
}
