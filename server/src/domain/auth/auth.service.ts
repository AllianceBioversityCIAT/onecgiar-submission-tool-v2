import { HttpStatus, Injectable } from '@nestjs/common';
import { CognitoProfileDto } from '../shared/global-dto/cognito-profile.dto';
import { ServiceResponseDto } from '../shared/global-dto/service-response.dto';
import { ResponseUtils } from '../shared/utils/response.utils';

@Injectable()
export class AuthService {
  auth(user: CognitoProfileDto): ServiceResponseDto<any> {
    return ResponseUtils.format<any>({
      message: 'User created successfully',
      status: HttpStatus.CREATED,
      data: user,
    });
  }
}
