import { Injectable } from '@nestjs/common';
import { CreatePeopleAndCultureDto } from './dto/create-people-and-culture.dto';
import { UpdatePeopleAndCultureDto } from './dto/update-people-and-culture.dto';

@Injectable()
export class PeopleAndCultureService {
  create(createPeopleAndCultureDto: CreatePeopleAndCultureDto) {
    return 'This action adds a new peopleAndCulture';
  }

  findAll() {
    return `This action returns all peopleAndCulture`;
  }

  findOne(id: number) {
    return `This action returns a #${id} peopleAndCulture`;
  }

  update(id: number, updatePeopleAndCultureDto: UpdatePeopleAndCultureDto) {
    return `This action updates a #${id} peopleAndCulture`;
  }

  remove(id: number) {
    return `This action removes a #${id} peopleAndCulture`;
  }
}
