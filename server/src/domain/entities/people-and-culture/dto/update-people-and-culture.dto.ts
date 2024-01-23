import { PartialType } from '@nestjs/swagger';
import { CreatePeopleAndCultureDto } from './create-people-and-culture.dto';

export class UpdatePeopleAndCultureDto extends PartialType(CreatePeopleAndCultureDto) {}
