import { Body, Controller, Get, Patch, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { ServiceResponseDto } from '../../shared/global-dto/service-response.dto';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('Users')
@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBearerAuth()
  @ApiQuery({ name: 'id', required: false })
  @ApiQuery({ name: 'email', required: false })
  @ApiQuery({ name: 'active', required: false })
  @Get()
  find(
    @Query('id') id: string,
    @Query('email') email: string,
    @Query('active') active: string = '1',
  ): Promise<ServiceResponseDto<User[]>> {
    return this.usersService.find(+id, +active, email);
  }

  @ApiBearerAuth()
  @ApiBody({ type: CreateUserDto })
  @Patch('save')
  save(@Body() user: CreateUserDto): Promise<ServiceResponseDto<User>> {
    return this.usersService.create(user);
  }
}
