import { HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ServiceResponseDto } from '../../../domain/shared/global-dto/service-response.dto';
import { ClarisaImpactArea } from './entities/clarisa-impact-area.entity';
import { ResponseUtils } from '../../../domain/shared/utils/response.utils';
import { CommonRepository } from '../../../db/repositories/common.repository';

@Injectable()
export class ClarisaImpactAreasService {
  constructor(private readonly dataSource: DataSource) {}

  find(): Promise<ServiceResponseDto<ClarisaImpactArea[]>> {
    const res = CommonRepository.findAll<ClarisaImpactArea>(
      this.dataSource,
      ClarisaImpactArea,
    );

    return res.then((data) =>
      ResponseUtils.format({
        message: 'Impact Areas were found correctly!',
        status: HttpStatus.OK,
        data: data,
      }),
    );
  }
}
