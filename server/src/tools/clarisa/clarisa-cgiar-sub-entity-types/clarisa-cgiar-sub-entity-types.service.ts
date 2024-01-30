import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ClarisaCgiarSubEntityType } from './entities/clarisa-cgiar-sub-entity-type.entity';
import { ServiceResponseDto } from '../../../domain/shared/global-dto/service-response.dto';
import { ResponseUtils } from '../../../domain/shared/utils/response.utils';
import { CommonSearchRepository } from '../../../db/repositories/common.repository';

@Injectable()
export class ClarisaCgiarSubEntityTypesService {
  constructor(private readonly dataSource: DataSource) {}

  find(): Promise<ServiceResponseDto<ClarisaCgiarSubEntityType[]>> {
    const res = CommonSearchRepository.findAll<ClarisaCgiarSubEntityType>(
      this.dataSource,
      ClarisaCgiarSubEntityType,
    );

    return res.then((data) =>
      ResponseUtils.format({
        message: 'Cgiar Sub Entity Types were found correctly!',
        status: HttpStatus.OK,
        data: data,
      }),
    );
  }
}
