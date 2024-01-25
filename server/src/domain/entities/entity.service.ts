import { HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Entities } from './entities/entities.entity';
import { ResponseUtils } from '../shared/utils/response.utils';
import { QueryUtil } from '../shared/utils/query.util';
import { ClarisaCgiarEntityTypesEnum } from '../shared/enums/cgiar-entity-type.enum';

@Injectable()
export class EntityService {
  constructor(private readonly dataSource: DataSource) {}

  async findEntities(
    type: string,
    id: number,
    officialCode: string,
    active: number = 1,
  ) {
    const response = await this.dataSource.transaction(async (manager) => {
      const config = QueryUtil.buildQueryWhere({
        entities: {
          is_active: active,
          official_code: officialCode,
          entity_id: id,
          entity_type_id: ClarisaCgiarEntityTypesEnum.getFromName(type)?.value,
        },
      });

      return manager
        .getRepository(Entities)
        .createQueryBuilder('entities')
        .leftJoinAndSelect(
          'entities.entity_level_2_array',
          'level2',
          'level2.is_active = true',
        )
        .leftJoinAndSelect(
          'level2.entity_level_3_array',
          'level3',
          'level3.is_active = true',
        )
        .leftJoinAndSelect('level2.sub_entity_type_obj', 'subEntityType1')
        .leftJoinAndSelect('level3.sub_entity_type_obj', 'subEntityType2')
        .leftJoinAndSelect('entities.entity_type_obj', 'entityType')
        .where(config.where, config.attr)
        .getMany()
        .then((res) => res);
    });
    return ResponseUtils.format<any>({
      message: `Success`,
      status: HttpStatus.OK,
      data: response,
    });
  }
}
