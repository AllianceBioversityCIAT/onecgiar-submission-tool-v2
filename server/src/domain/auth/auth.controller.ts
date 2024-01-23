import { Controller, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBasicAuth, ApiDefaultResponse } from '@nestjs/swagger';
import { SearchRequest } from '../shared/decorators/search-request.decorator';
import { ResponseUtils } from '../shared/utils/response.utils';
import { CognitoProfileDto } from '../shared/global-dto/cognito-profile.dto';
import { ServiceResponseDto } from '../shared/global-dto/service-response.dto';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBasicAuth()
  @ApiDefaultResponse({
    type: ServiceResponseDto<CognitoProfileDto>,
  })
  @UseGuards(AuthGuard('cognito'))
  @Post('aws')
  awsAuth(
    @SearchRequest('user') user: CognitoProfileDto,
  ): ServiceResponseDto<any> {
    return ResponseUtils.format<any>({
      message: 'User created successfully',
      status: HttpStatus.CREATED,
      data: user,
    });
  }
}
