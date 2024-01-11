import { Injectable } from '@nestjs/common';
import { CreateClimateDto } from './dto/create-climate.dto';
import { UpdateClimateDto } from './dto/update-climate.dto';

@Injectable()
export class ClimateService {
  create(createClimateDto: CreateClimateDto) {
    return 'This action adds a new climate';
  }

  findAll() {
    return `This action returns all climate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} climate`;
  }

  update(id: number, updateClimateDto: UpdateClimateDto) {
    return `This action updates a #${id} climate`;
  }

  remove(id: number) {
    return `This action removes a #${id} climate`;
  }
}
