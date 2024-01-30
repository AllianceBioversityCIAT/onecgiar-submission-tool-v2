import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { CognitoStrategy } from '../../tools/AWS/cognito.strategy';
import { JwtModule } from '@nestjs/jwt';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from './auth.service';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [JwtModule, HttpModule, UsersModule, RolesModule],
  controllers: [AuthController],
  providers: [CognitoStrategy, AuthService],
  exports: [],
})
export class AuthModule {}
