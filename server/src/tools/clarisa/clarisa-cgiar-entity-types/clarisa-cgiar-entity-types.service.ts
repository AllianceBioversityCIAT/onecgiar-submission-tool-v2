import { HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ServiceResponseDto } from '../../../domain/shared/global-dto/service-response.dto';
import { ClarisaCgiarEntityType } from './entities/clarisa-cgiar-entity-type.entity';
import { ResponseUtils } from '../../../domain/shared/utils/response.utils';
import { CommonRepository } from '../../../db/repositories/common.repository';

@Injectable()
export class ClarisaCgiarEntityTypesService {
  constructor(private readonly dataSource: DataSource) {}

  find(): Promise<ServiceResponseDto<ClarisaCgiarEntityType[]>> {
    const res = CommonRepository.findAll<ClarisaCgiarEntityType>(
      this.dataSource,
      ClarisaCgiarEntityType,
    );

    return res.then((data) =>
      ResponseUtils.format({
        message: 'Cgiar Entity Types were found correctly!',
        status: HttpStatus.OK,
        data: data,
      }),
    );
  }
}
