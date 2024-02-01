import { Request, Response, NextFunction } from 'express';
import {
  Injectable,
  NestMiddleware,
  Next,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { ExceptionMessage } from '../enums/exception-message.enum';
import { CognitoProfileDto } from '../global-dto/cognito-profile.dto';
import { JwtService, TokenExpiredError, JsonWebTokenError } from '@nestjs/jwt';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(
    @Req() req: RequestWithCustomAttrs,
    @Res() _res: Response,
    @Next() next: NextFunction,
  ) {
    const { authorization } = req.headers;
    if (typeof authorization !== 'string') {
      throw new UnauthorizedException(ExceptionMessage.JWT_NOT_FOUND);
    }

    const parts = authorization.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      throw new UnauthorizedException(ExceptionMessage.JWT_NOT_FOUND);
    }

    const token = parts[1];

    try {
      const decoded = this.jwtService.verify(token);
      req.user = decoded as CognitoProfileDto;
      next();
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new UnauthorizedException(ExceptionMessage.JWT_EXPIRED);
      } else if (error instanceof JsonWebTokenError) {
        throw new UnauthorizedException(ExceptionMessage.JWT_INVALID);
      } else {
        throw new UnauthorizedException(ExceptionMessage.JWT_ERROR);
      }
    }
  }
}

interface RequestWithCustomAttrs extends Request {
  [key: string]: any;
}
