import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CognitoProfileDto } from '../shared/global-dto/cognito-profile.dto';
import { ServiceResponseDto } from '../shared/global-dto/service-response.dto';
import { ResponseUtils } from '../shared/utils/response.utils';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly _configService: ConfigService,
    private readonly dataSource: DataSource,
    private jwt: JwtService,
  ) {}

  auth(user: CognitoProfileDto): Promise<ServiceResponseDto<string>> {
    const userExists = this.dataSource.transaction(async (manager) => {
      return manager.getRepository(User).findOne({
        where: {
          email: user.email?.trim()?.toLowerCase(),
          is_active: true,
        },
      });
    });

    return userExists
      .then((res) => {
        if (res) return res as User;
        throw new NotFoundException('User not found');
      })
      .then((res) => {
        const payload = {
          user_id: res.user_id,
          first_name: res.first_name,
          last_name: res.last_name,
        };
        return ResponseUtils.format<string>({
          message: `User authenticated`,
          status: HttpStatus.OK,
          data: this.jwt.sign(payload, {
            secret: this._configService.get<string>('JWT_SECRET_KEY'),
            expiresIn: this._configService.get<string>('JWT_EXPIRES_IN'),
          }),
        });
      });
  }
}
