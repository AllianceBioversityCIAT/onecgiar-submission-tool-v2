import { HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ServiceResponseDto } from '../../../domain/shared/global-dto/service-response.dto';
import { ClarisaRegion } from './entities/clarisa-region.entity';
import { ResponseUtils } from '../../../domain/shared/utils/response.utils';
import { CommonRepository } from '../../../db/repositories/common.repository';

@Injectable()
export class ClarisaRegionsService {
  constructor(private readonly dataSource: DataSource) {}

  find(): Promise<ServiceResponseDto<ClarisaRegion[]>> {
    const res = CommonRepository.findAll<ClarisaRegion>(
      this.dataSource,
      ClarisaRegion,
    );

    return res.then((data) =>
      ResponseUtils.format({
        message: 'Regions were found correctly!',
        status: HttpStatus.OK,
        data: data,
      }),
    );
  }
}
