import { Injectable } from '@nestjs/common';
import { CreateEntityLevel3Dto } from './dto/create-entity-level-3.dto';
import { UpdateEntityLevel3Dto } from './dto/update-entity-level-3.dto';

@Injectable()
export class EntityLevel3Service {
  create(createEntityLevel3Dto: CreateEntityLevel3Dto) {
    return 'This action adds a new entityLevel3';
  }

  findAll() {
    return `This action returns all entityLevel3`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entityLevel3`;
  }

  update(id: number, updateEntityLevel3Dto: UpdateEntityLevel3Dto) {
    return `This action updates a #${id} entityLevel3`;
  }

  remove(id: number) {
    return `This action removes a #${id} entityLevel3`;
  }
}
