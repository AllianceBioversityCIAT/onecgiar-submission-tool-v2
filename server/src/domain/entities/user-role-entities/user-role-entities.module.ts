import { Module } from '@nestjs/common';
import { UserRoleEntitiesService } from './user-role-entities.service';
import { UserRoleEntitiesController } from './user-role-entities.controller';

@Module({
  controllers: [UserRoleEntitiesController],
  providers: [UserRoleEntitiesService],
  exports: [UserRoleEntitiesService],
})
export class UserRoleEntitiesModule {}
