import { Injectable } from '@nestjs/common';
import { CreateContextDto } from './dto/create-context.dto';
import { UpdateContextDto } from './dto/update-context.dto';

@Injectable()
export class ContextService {
  create(createContextDto: CreateContextDto) {
    return 'This action adds a new context';
  }

  findAll() {
    return `This action returns all context`;
  }

  findOne(id: number) {
    return `This action returns a #${id} context`;
  }

  update(id: number, updateContextDto: UpdateContextDto) {
    return `This action updates a #${id} context`;
  }

  remove(id: number) {
    return `This action removes a #${id} context`;
  }
}
