import { HttpService } from '@nestjs/axios';
import { Request } from 'express';
import {
  BadRequestException,
  Injectable,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import { AWSutil } from '../../domain/shared/utils/aws.utils';
import { firstValueFrom, map } from 'rxjs';
import { ExceptionMessage } from '../../domain/shared/enums/exception-message.enum';
import { ResponseCognitoDto } from '../../domain/shared/global-dto/cognito-config.dto';
import { CognitoProfileDto } from '../../domain/shared/global-dto/cognito-profile.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CognitoStrategy extends PassportStrategy(Strategy, 'cognito') {
  constructor(
    private readonly _http: HttpService,
    private readonly _configService: ConfigService,
  ) {
    super();
  }

  async validate(@Req() { body: { code } = undefined }: Request) {
    const config = AWSutil.cognito.config({
      client_id: this._configService.get<string>('COGNITO_CLIENT_ID'),
      client_secret: this._configService.get<string>('COGNITO_CLIENT_SECRET'),
      code: code,
      redirect_uri: this._configService.get<string>('COGNITO_REDIRECT_URI'),
    });

    const accessToken = await this._createToken(config);
    const profileData = await this._getProfileData(accessToken);

    return profileData;
  }

  private _createToken(config: ResponseCognitoDto): Promise<string> {
    return firstValueFrom(
      this._http
        .post(
          `${this._configService.get<string>('COGNITO_LINK')}/oauth2/token`,
          config.body,
          config.headers,
        )
        .pipe(
          map(({ data: { access_token } = undefined }) => {
            if (!access_token) {
              throw new UnauthorizedException(
                ExceptionMessage.AWS_AUTHORIZATION_CODE,
              );
            }
            return access_token;
          }),
        ),
    ).catch((err) => {
      throw new BadRequestException(err);
    });
  }

  private _getProfileData(accessToken: string): Promise<CognitoProfileDto> {
    return firstValueFrom(
      this._http
        .get(
          `${this._configService.get<string>('COGNITO_LINK')}/oauth2/userInfo`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )
        .pipe(
          map(({ data } = undefined) => {
            if (!data) {
              throw new UnauthorizedException(
                ExceptionMessage.AWS_AUTHORIZATION_CODE,
              );
            }
            return data;
          }),
        ),
    ).catch((err) => {
      throw new BadRequestException(err);
    });
  }
}
