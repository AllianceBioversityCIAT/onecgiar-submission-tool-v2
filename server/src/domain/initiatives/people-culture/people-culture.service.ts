import { Injectable } from '@nestjs/common';
import { CreatePeopleCultureDto } from './dto/create-people-culture.dto';
import { UpdatePeopleCultureDto } from './dto/update-people-culture.dto';

@Injectable()
export class PeopleCultureService {
  create(createPeopleCultureDto: CreatePeopleCultureDto) {
    return 'This action adds a new peopleCulture';
  }

  findAll() {
    return `This action returns all peopleCulture`;
  }

  findOne(id: number) {
    return `This action returns a #${id} peopleCulture`;
  }

  update(id: number, updatePeopleCultureDto: UpdatePeopleCultureDto) {
    return `This action updates a #${id} peopleCulture`;
  }

  remove(id: number) {
    return `This action removes a #${id} peopleCulture`;
  }
}
