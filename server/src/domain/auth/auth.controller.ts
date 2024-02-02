import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiDefaultResponse,
  ApiHeader,
  ApiOperation,
  ApiTags,
  PartialType,
} from '@nestjs/swagger';
import { SearchRequest } from '../shared/decorators/search-request.decorator';
import { CognitoProfileDto } from '../shared/global-dto/cognito-profile.dto';
import { ServiceResponseDto } from '../shared/global-dto/service-response.dto';
import { AuthService } from './auth.service';
import { ServerResponseDto } from '../shared/global-dto/server-response.dto';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBearerAuth()
  @ApiOperation({
    description: 'This endpoint requires Bearer authentication.',
    summary: 'AWS Cognito authentication',
  })
  @ApiHeader({
    name: 'authorization',
    description: 'Bearer <token>',
  })
  @ApiDefaultResponse({
    type: ServerResponseDto<string>,
  })
  @UseGuards(AuthGuard('cognito'))
  @Post('login')
  awsAuth(
    @SearchRequest('user') user: CognitoProfileDto,
  ): Promise<ServiceResponseDto<string>> {
    return this.authService.auth(user);
  }
}
