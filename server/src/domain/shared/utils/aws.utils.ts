import {
  CognitoConfigDto,
  ResponseCognitoDto,
} from '../global-dto/cognito-config.dto';

export class AWSutil {
  public static cognito = {
    config: (config: CognitoConfigDto): ResponseCognitoDto => {
      return {
        body: new URLSearchParams({
          ...config.moreoptions?.body,
          grant_type: config?.grant_type || 'authorization_code',
          client_id: config.client_id,
          client_secret: config.client_secret,
          code: config.code,
          redirect_uri: config.redirect_uri,
        })?.toString(),
        headers: {
          auth: {
            username: config.client_id,
            password: config.client_secret,
          },
          headers: {
            ...config.moreoptions?.headers,
            'Content-Type':
              config.moreoptions?.headers?.['Content-Type'] ||
              'application/x-www-form-urlencoded',
          },
        },
      };
    },
  };

  public static dynamo() {}
}
