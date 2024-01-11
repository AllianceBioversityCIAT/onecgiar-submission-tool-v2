import { Injectable } from '@nestjs/common';
import { CreateInnovationPortfolioDto } from './dto/create-innovation-portfolio.dto';
import { UpdateInnovationPortfolioDto } from './dto/update-innovation-portfolio.dto';

@Injectable()
export class InnovationPortfolioService {
  create(createInnovationPortfolioDto: CreateInnovationPortfolioDto) {
    return 'This action adds a new innovationPortfolio';
  }

  findAll() {
    return `This action returns all innovationPortfolio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} innovationPortfolio`;
  }

  update(id: number, updateInnovationPortfolioDto: UpdateInnovationPortfolioDto) {
    return `This action updates a #${id} innovationPortfolio`;
  }

  remove(id: number) {
    return `This action removes a #${id} innovationPortfolio`;
  }
}
