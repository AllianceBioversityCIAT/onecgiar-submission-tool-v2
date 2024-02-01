import { Controller } from '@nestjs/common';
import { UserRoleEntitiesService } from './user-role-entities.service';

@Controller('user-role-entities')
export class UserRoleEntitiesController {
  constructor(
    private readonly userRoleEntitiesService: UserRoleEntitiesService,
  ) {}
}
