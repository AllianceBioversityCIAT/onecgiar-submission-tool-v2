import { Injectable } from '@nestjs/common';
import { CreateTheoryOfChangeDto } from './dto/create-theory-of-change.dto';
import { UpdateTheoryOfChangeDto } from './dto/update-theory-of-change.dto';

@Injectable()
export class TheoryOfChangeService {
  create(createTheoryOfChangeDto: CreateTheoryOfChangeDto) {
    return 'This action adds a new theoryOfChange';
  }

  findAll() {
    return `This action returns all theoryOfChange`;
  }

  findOne(id: number) {
    return `This action returns a #${id} theoryOfChange`;
  }

  update(id: number, updateTheoryOfChangeDto: UpdateTheoryOfChangeDto) {
    return `This action updates a #${id} theoryOfChange`;
  }

  remove(id: number) {
    return `This action removes a #${id} theoryOfChange`;
  }
}
