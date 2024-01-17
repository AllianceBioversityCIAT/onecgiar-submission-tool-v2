import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  InternalServerErrorException,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, map } from 'rxjs';
import { ServerResponseDto } from '../global-dto/server-response.dto';
import { ServiceResponseDto } from '../global-dto/service-response.dto';
import { ENV } from '../utils/env.utils';

export class ResponseInterceptor implements NestInterceptor {
  private readonly _logger: Logger = new Logger('System');
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ServerResponseDto<unknown>> {
    const ctx = context.switchToHttp();
    const response: Response = ctx.getResponse<Response>();
    const request: Request = ctx.getRequest<Request>();
    const ip = request.socket.remoteAddress;

    return next.handle().pipe(
      map((res: any) => {
        let modifiedData: ServerResponseDto<unknown> = {
          data: [],
          status: HttpStatus.OK,
          message: 'Unknown message',
          errors: null,
          timestamp: new Date().toISOString(),
          path: request.url,
        };

        if (this.isServiceResponseDto(res)) {
          modifiedData = {
            ...modifiedData,
            ...res,
          };
        } else if (this.isError(res)) {
          modifiedData = {
            ...modifiedData,
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            message: res.name,
            errors: res.message,
          };
        }
        const message = `[${request.method}]: ${request.url} status: ${modifiedData.status} - By ${ip}`;

        this.logBasedOnStatus(modifiedData.status, message, res?.stack);

        response.status(modifiedData.status);
        return modifiedData;
      }),
    );
  }

  private logBasedOnStatus(status: HttpStatus, message: string, error?: any) {
    if (
      status >= HttpStatus.AMBIGUOUS &&
      status < HttpStatus.INTERNAL_SERVER_ERROR
    ) {
      this._logger.warn(message);
      this._logger.warn(error);
    } else if (status >= HttpStatus.INTERNAL_SERVER_ERROR) {
      this._logger.fatal(message);
      this._logger.fatal(error);
    } else if (
      !ENV.IS_PRODUCTION &&
      ENV.SEE_ALL_LOGS &&
      status >= HttpStatus.OK &&
      status < HttpStatus.AMBIGUOUS
    ) {
      this._logger.verbose(message);
    }
  }

  private isServiceResponseDto(arg: any): arg is ServiceResponseDto<unknown> {
    return arg && arg?.data && arg?.status && arg?.message;
  }

  private isError(arg: any): arg is InternalServerErrorException {
    return arg && arg?.name && arg?.message && arg?.stack;
  }
}
