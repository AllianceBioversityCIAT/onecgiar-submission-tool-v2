import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataSource, Not } from 'typeorm';
import { Entities } from './entities/entities.entity';
import { ResponseUtils } from '../shared/utils/response.utils';
import { QueryUtil } from '../shared/utils/query.util';
import { ClarisaCgiarEntityTypesEnum } from '../shared/enums/cgiar-entity-type.enum';
import { ServiceResponseDto } from '../shared/global-dto/service-response.dto';
import { saveOverviewDto } from './dto/save-overview.dto';
import { EntitiesRepository } from '../../db/repositories/entities.repository';
import { ArrayUtil } from '../shared/utils/array-management.util';
import { EntityImpactArea } from './entity-impact-areas/entities/entity-impact-area.entity';
import { EntityCenter } from './entity-centers/entities/entity-center.entity';
import { CommonSearchRepository } from '../../db/repositories/common.repository';

@Injectable()
export class EntityService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly _entitiesRepository: EntitiesRepository,
  ) {}

  async findEntities(
    type?: string,
    id?: number,
    officialCode?: string,
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

  async saveOverviewSummary(
    entity_id: number,
    reqSave: saveOverviewDto,
  ): Promise<ServiceResponseDto<Entities>> {
    if (!entity_id) {
      throw new BadRequestException('Entity ID is required');
    }

    const entitytemp = await this._entitiesRepository
      .findOneOverview(entity_id)
      .then((res) => {
        if (!res) {
          throw new NotFoundException('Entity not found!');
        }

        return res;
      });

    const TEMP_entity_impact_area_array = ArrayUtil.update<EntityImpactArea>(
      reqSave.entity_impact_area_array,
      entitytemp?.entity_impact_area_array,
      'entity_impact_area_id',
    );

    const TEMP_entity_center_array = ArrayUtil.update<EntityCenter>(
      reqSave.entity_center_array,
      entitytemp?.entity_center_array,
      'entity_center_id',
    );

    const TEMP_Entity: Entities = { ...entitytemp };
    TEMP_Entity.short_name = reqSave.short_name;
    TEMP_Entity.name = reqSave.name;
    TEMP_Entity.lead_name = reqSave.lead_name;
    TEMP_Entity.lead_email = reqSave.lead_email;
    TEMP_Entity.co_lead_name = reqSave.co_lead_name;
    TEMP_Entity.co_lead_email = reqSave.co_lead_email;
    TEMP_Entity.clarisa_primary_action_area_id =
      reqSave.clarisa_primary_action_area_id;
    TEMP_Entity.budget = reqSave.budget;

    await CommonSearchRepository.save<Entities>(
      this.dataSource,
      Entities,
      TEMP_Entity,
    );

    await CommonSearchRepository.save<EntityImpactArea>(
      this.dataSource,
      EntityImpactArea,
      TEMP_entity_impact_area_array,
    );

    await CommonSearchRepository.save<EntityCenter>(
      this.dataSource,
      EntityCenter,
      TEMP_entity_center_array,
    );

    const dataUpdate =
      await this._entitiesRepository.findOneOverview(entity_id);

    return ResponseUtils.format({
      message: 'Overview was saved correctly!',
      status: HttpStatus.OK,
      data: dataUpdate,
    });
  }

  findOverviewSummary(
    entity_id: number,
  ): Promise<ServiceResponseDto<Entities>> {
    return this._entitiesRepository.findOneOverview(entity_id).then((data) =>
      ResponseUtils.format({
        message: 'Overview was found correctly!',
        status: HttpStatus.OK,
        data: data,
      }),
    );
  }
}
