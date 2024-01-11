import { Injectable } from '@nestjs/common';
import { CreateTheoriesChangeDto } from './dto/create-theories-change.dto';
import { UpdateTheoriesChangeDto } from './dto/update-theories-change.dto';

@Injectable()
export class TheoriesChangeService {
  create(createTheoriesChangeDto: CreateTheoriesChangeDto) {
    return 'This action adds a new theoriesChange';
  }

  findAll() {
    return `This action returns all theoriesChange`;
  }

  findOne(id: number) {
    return `This action returns a #${id} theoriesChange`;
  }

  update(id: number, updateTheoriesChangeDto: UpdateTheoriesChangeDto) {
    return `This action updates a #${id} theoriesChange`;
  }

  remove(id: number) {
    return `This action removes a #${id} theoriesChange`;
  }
}
