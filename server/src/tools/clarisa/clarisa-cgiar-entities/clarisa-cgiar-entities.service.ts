import { HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ClarisaCgiarEntity } from './entities/clarisa-cgiar-entity.entity';
import { ResponseUtils } from '../../../domain/shared/utils/response.utils';
import { ServiceResponseDto } from '../../../domain/shared/global-dto/service-response.dto';
import { CommonSearchRepository } from '../../../db/repositories/common.repository';

@Injectable()
export class ClarisaCgiarEntitiesService {
  constructor(private readonly dataSource: DataSource) {}

  find(): Promise<ServiceResponseDto<ClarisaCgiarEntity[]>> {
    const res = CommonSearchRepository.findAll<ClarisaCgiarEntity>(
      this.dataSource,
      ClarisaCgiarEntity,
    );

    return res.then((data) =>
      ResponseUtils.format({
        message: 'Cgiar Entities were found correctly!',
        status: HttpStatus.OK,
        data: data,
      }),
    );
  }
}
