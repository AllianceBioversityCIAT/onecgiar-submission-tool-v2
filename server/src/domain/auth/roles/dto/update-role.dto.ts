import { PartialType } from '@nestjs/swagger';
import { Role } from '../entities/role.entity';

export class UpdateRoleDto extends PartialType(Role) {
  update_users: boolean;
  is_application_role: boolean;
}
