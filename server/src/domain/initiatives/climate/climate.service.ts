import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateClimateDto } from './dto/create-climate.dto';
import { UpdateClimateDto } from './dto/update-climate.dto';
import { ServiceResponseDto } from '../../shared/global-dto/service-response.dto';
import { ENV } from '../../shared/utils/env.utils';
import { ResponseUtils } from '../../shared/utils/response.utils';

@Injectable()
export class ClimateService {
  async create(
    createClimateDto: CreateClimateDto,
  ): Promise<ServiceResponseDto<string>> {
    return ResponseUtils.format<string>({
      message: 'Climate created successfully',
      status: HttpStatus.CREATED,
      data: 'Climate created successfully',
    });
  }

  findAll() {
    return `This action returns all climate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} climate`;
  }

  update(id: number, updateClimateDto: UpdateClimateDto) {
    return `This action updates a #${id} climate`;
  }

  remove(id: number) {
    return `This action removes a #${id} climate`;
  }
}
