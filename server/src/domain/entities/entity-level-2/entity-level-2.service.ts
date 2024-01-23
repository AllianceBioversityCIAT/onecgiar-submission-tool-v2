import { Injectable } from '@nestjs/common';
import { CreateEntityLevel2Dto } from './dto/create-entity-level-2.dto';
import { UpdateEntityLevel2Dto } from './dto/update-entity-level-2.dto';

@Injectable()
export class EntityLevel2Service {
  create(createEntityLevel2Dto: CreateEntityLevel2Dto) {
    return 'This action adds a new entityLevel2';
  }

  findAll() {
    return `This action returns all entityLevel2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} entityLevel2`;
  }

  update(id: number, updateEntityLevel2Dto: UpdateEntityLevel2Dto) {
    return `This action updates a #${id} entityLevel2`;
  }

  remove(id: number) {
    return `This action removes a #${id} entityLevel2`;
  }
}
