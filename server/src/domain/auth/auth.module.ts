import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { CognitoStrategy } from '../../tools/cognito.strategy';
import { JwtModule } from '@nestjs/jwt';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from './auth.service';

@Module({
  imports: [JwtModule, HttpModule],
  controllers: [AuthController],
  providers: [CognitoStrategy, AuthService],
  exports: [],
})
export class AuthModule {}
