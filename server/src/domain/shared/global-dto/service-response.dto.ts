import { HttpStatus } from '@nestjs/common';

export class ServiceResponseDto<T> {
  status: HttpStatus;
  data?: T;
  message: string;
  errors?: any;
}
