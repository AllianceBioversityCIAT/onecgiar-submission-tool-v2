import { PartialType } from '@nestjs/swagger';
import { CreateInnovationPortfolioDto } from './create-innovation-portfolio.dto';

export class UpdateInnovationPortfolioDto extends PartialType(
  CreateInnovationPortfolioDto,
) {}
