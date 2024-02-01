import { Controller, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBasicAuth,
  ApiBearerAuth,
  ApiDefaultResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SearchRequest } from '../shared/decorators/search-request.decorator';
import { ResponseUtils } from '../shared/utils/response.utils';
import { CognitoProfileDto } from '../shared/global-dto/cognito-profile.dto';
import { ServiceResponseDto } from '../shared/global-dto/service-response.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBearerAuth()
  @ApiDefaultResponse({
    type: ServiceResponseDto<CognitoProfileDto>,
  })
  @UseGuards(AuthGuard('cognito'))
  @Post('login')
  awsAuth(
    @SearchRequest('user') user: CognitoProfileDto,
  ): Promise<ServiceResponseDto<string>> {
    return this.authService.auth(user);
  }
}
