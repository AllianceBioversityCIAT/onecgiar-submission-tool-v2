import { Injectable } from '@nestjs/common';
import { CreateInitiativeDto } from './dto/create-initiative.dto';
import { UpdateInitiativeDto } from './dto/update-initiative.dto';

@Injectable()
export class InitiativesService {
  create(createInitiativeDto: CreateInitiativeDto) {
    return 'This action adds a new initiative';
  }

  findAll() {
    return `This action returns all initiatives`;
  }
}
