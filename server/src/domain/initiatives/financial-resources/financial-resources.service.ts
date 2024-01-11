import { Injectable } from '@nestjs/common';
import { CreateFinancialResourceDto } from './dto/create-financial-resource.dto';
import { UpdateFinancialResourceDto } from './dto/update-financial-resource.dto';

@Injectable()
export class FinancialResourcesService {
  create(createFinancialResourceDto: CreateFinancialResourceDto) {
    return 'This action adds a new financialResource';
  }

  findAll() {
    return `This action returns all financialResources`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financialResource`;
  }

  update(id: number, updateFinancialResourceDto: UpdateFinancialResourceDto) {
    return `This action updates a #${id} financialResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} financialResource`;
  }
}
