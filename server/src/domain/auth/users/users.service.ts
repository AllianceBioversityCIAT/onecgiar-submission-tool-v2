import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource, Like } from 'typeorm';
import { User } from './entities/user.entity';
import { QueryUtil } from '../../shared/utils/query.util';
import { ServiceResponseDto } from '../../shared/global-dto/service-response.dto';
import { ResponseUtils } from '../../shared/utils/response.utils';

@Injectable()
export class UsersService {
  constructor(private readonly dataSource: DataSource) {}

  find(
    id: number,
    active: number,
    email: string,
  ): Promise<ServiceResponseDto<User[]>> {
    const TEMP_email = email ? [`email like '%${email}%'`] : [];
    const config = QueryUtil.buildQueryWhere(
      {
        user: {
          is_active: active,
          user_id: id,
        },
      },
      {
        user: [...TEMP_email],
      },
    );
    const resUser = this.dataSource.transaction(async (manager) => {
      return manager
        .getRepository(User)
        .createQueryBuilder('user')
        .where(config.where, config.attr)
        .getMany();
    });

    return resUser.then((data) =>
      ResponseUtils.format({
        message: 'Users found successfully!',
        data,
        status: HttpStatus.OK,
      }),
    );
  }

  create(user: User): Promise<ServiceResponseDto<User>> {
    return this.dataSource
      .transaction(async (manager) => {
        const ifExists = await manager.getRepository(User).findOne({
          where: {
            email: Like(user.email),
            is_active: true,
          },
        });
        if (ifExists) {
          throw new ConflictException('User already exists!');
        }

        const TEMP_user: Partial<User> = {
          email: user.email?.toLowerCase(),
          first_name: user.first_name?.trim(),
          last_name: user.last_name?.trim(),
        };
        return manager.getRepository(User).save(TEMP_user);
      })
      .then((data) =>
        ResponseUtils.format({
          message: 'User created successfully!',
          data,
          status: HttpStatus.CREATED,
        }),
      );
  }
}
