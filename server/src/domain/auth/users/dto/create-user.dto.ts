import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'John', required: true })
  first_name: string;

  @ApiProperty({ example: 'Doe', required: true })
  last_name: string;

  @ApiProperty({ example: 'joindoe@cgiar.org', required: true })
  email: string;
}
