import { PartialType } from '@nestjs/swagger';
import { CreateUserRoleEntityDto } from './create-user-role-entity.dto';

export class UpdateUserRoleEntityDto extends PartialType(CreateUserRoleEntityDto) {}
