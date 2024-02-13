import { HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ClarisaCountry } from './entities/clarisa-country.entity';
import { ServiceResponseDto } from '../../../domain/shared/global-dto/service-response.dto';
import { ResponseUtils } from '../../../domain/shared/utils/response.utils';
import { CommonRepository } from '../../../db/repositories/common.repository';

@Injectable()
export class ClarisaCountriesService {
  constructor(private readonly dataSource: DataSource) {}

  find(): Promise<ServiceResponseDto<ClarisaCountry[]>> {
    const res = CommonRepository.findAll<ClarisaCountry>(
      this.dataSource,
      ClarisaCountry,
    );

    return res.then((data) =>
      ResponseUtils.format({
        message: 'Countries were found correctly!',
        status: HttpStatus.OK,
        data: data,
      }),
    );
  }
}
