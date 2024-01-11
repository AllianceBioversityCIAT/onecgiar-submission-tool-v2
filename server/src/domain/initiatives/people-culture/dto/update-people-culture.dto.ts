import { PartialType } from '@nestjs/swagger';
import { CreatePeopleCultureDto } from './create-people-culture.dto';

export class UpdatePeopleCultureDto extends PartialType(CreatePeopleCultureDto) {}
