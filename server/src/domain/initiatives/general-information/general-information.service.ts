import { Injectable } from '@nestjs/common';
import { CreateGeneralInformationDto } from './dto/create-general-information.dto';
import { UpdateGeneralInformationDto } from './dto/update-general-information.dto';

@Injectable()
export class GeneralInformationService {
  create(createGeneralInformationDto: CreateGeneralInformationDto) {
    return 'This action adds a new generalInformation';
  }

  findAll() {
    return `This action returns all generalInformation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generalInformation`;
  }

  update(id: number, updateGeneralInformationDto: UpdateGeneralInformationDto) {
    return `This action updates a #${id} generalInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} generalInformation`;
  }
}
