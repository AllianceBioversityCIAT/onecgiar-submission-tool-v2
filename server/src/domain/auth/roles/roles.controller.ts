import { Body, Controller, Get, Patch, Query } from '@nestjs/common';
import { RolesService } from './roles.service';
import { SearchRequest } from '../../shared/decorators/search-request.decorator';
import { JwtPayloadDto } from './dto/jwt-payload.dto';
import { Role } from './entities/role.entity';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ServiceResponseDto } from '../../shared/global-dto/service-response.dto';
import { ApiBody, ApiQuery } from '@nestjs/swagger';
import { ClarisaCgiarEntityTypesEnum } from '../../shared/enums/cgiar-entity-type.enum';

@Controller()
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiQuery({
    name: 'type',
    required: false,
    enum: ['app', ...ClarisaCgiarEntityTypesEnum.getArray()],
  })
  @Get()
  find(@Query('type') type: string): Promise<ServiceResponseDto<Role[]>> {
    return this.rolesService.find(type);
  }

  @ApiBody({
    schema: {
      properties: {
        role_name: {
          type: 'string',
          description: 'Role Name',
          example: 'Admin',
        },
        priority: { type: 'number', description: 'Role Priority', example: 1 },
        clarisa_entity_type_id: {
          type: 'number',
          description:
            'Clarisa entity type ID if it is an application role, this field is null',
          example: 6,
        },
      },
    },
  })
  @Patch('save')
  save(@Body() role: Role, @SearchRequest('user') user: JwtPayloadDto) {
    return this.rolesService.create(role, user);
  }
}
