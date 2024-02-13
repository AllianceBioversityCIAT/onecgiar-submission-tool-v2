import { PartialType } from '@nestjs/swagger';
import { Entities } from '../entities/entities.entity';

export class SaveOverviewDto extends PartialType(Entities) {}
