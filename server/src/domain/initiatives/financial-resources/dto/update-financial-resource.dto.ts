import { PartialType } from '@nestjs/swagger';
import { CreateFinancialResourceDto } from './create-financial-resource.dto';

export class UpdateFinancialResourceDto extends PartialType(CreateFinancialResourceDto) {}
