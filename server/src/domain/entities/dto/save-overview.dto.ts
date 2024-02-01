import { PartialType } from '@nestjs/swagger';
import { Entities } from '../entities/entities.entity';

export class saveOverviewDto extends PartialType(Entities) {}
