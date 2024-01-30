import { HttpStatus, Injectable } from '@nestjs/common';
import { ServiceResponseDto } from '../../../domain/shared/global-dto/service-response.dto';
import { ClarisaActionArea } from './entities/clarisa-action-area.entity';
import { DataSource } from 'typeorm';
import { ResponseUtils } from '../../../domain/shared/utils/response.utils';
import { CommonSearchRepository } from '../../../db/repositories/common.repository';

@Injectable()
export class ClarisaActionAreasService {
  constructor(private readonly dataSource: DataSource) {}

  find(): Promise<ServiceResponseDto<ClarisaActionArea[]>> {
    const res = CommonSearchRepository.findAll<ClarisaActionArea>(
      this.dataSource,
      ClarisaActionArea,
    );
    return res.then((data) =>
      ResponseUtils.format({
        message: 'Action Areas were found correctly!',
        status: HttpStatus.OK,
        data: data,
      }),
    );
  }
}
