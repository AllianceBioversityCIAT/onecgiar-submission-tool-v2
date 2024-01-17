import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ServerResponseDto } from '../global-dto/server-response.dto';

@Catch()
export class GlobalExceptions implements ExceptionFilter {
  private readonly _logger: Logger = new Logger('System');
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = HttpStatus.INTERNAL_SERVER_ERROR;
    const message = (exception as InternalServerErrorException)?.name;
    const error = (exception as InternalServerErrorException)?.message;

    const res: ServerResponseDto<unknown> = {
      message: message,
      status: status,
      errors: error,
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    this._logger.fatal((exception as InternalServerErrorException)?.stack);

    response.status(status).json(res);
  }
}
