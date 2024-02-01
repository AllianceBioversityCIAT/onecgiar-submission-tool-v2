import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import { env } from 'process';
import { BadRequestException } from '@nestjs/common';

export class Clarisa {
  private clarisaHost: string;
  private auth: ClarisaAuthorization;
  private http: HttpService;
  constructor(http: HttpService, config: ClarisaOptions) {
    this.clarisaHost = env.CLARISA_HOST + 'api/';
    this.auth = {
      auth: {
        password: config.password,
        username: config.username,
      },
    };
    this.http = http;
  }

  public get<T>(path: string): Promise<T[]> {
    return firstValueFrom(
      this.http.get<T[]>(this.clarisaHost + path, this.auth).pipe(
        map(({ data }) => {
          return data;
        }),
      ),
    ).catch((err) => {
      throw new BadRequestException(err);
    });
  }
}

interface ClarisaAuthorization {
  auth: ClarisaOptions;
}

interface ClarisaOptions {
  username: string;
  password: string;
}
