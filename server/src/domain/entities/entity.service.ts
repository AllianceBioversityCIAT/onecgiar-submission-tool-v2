import {
  BadRequestException,
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';
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
import { RegexUtil } from '../shared/utils/regex.utils';
import { InitiativeDetail } from './initiative-details/entities/initiative-detail.entity';
import { UserRoleEntitiesService } from './user-role-entities/user-role-entities.service';
import { Role } from '../auth/roles/entities/role.entity';
import { CreateBaseEntityDto } from './dto/create-base-entity.dto';

@Injectable()
export class EntityService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly _entitiesRepository: EntitiesRepository,
    private readonly _userRoleEntitiesService: UserRoleEntitiesService,
  ) {}

  async findEntities(
    type?: string,
    id?: number,
    officialCode?: string,
    active: number = 1,
  ) {
    const response = await this.dataSource.transaction(async (manager) => {
      const config = QueryUtil.buildQueryWhere(
        {
          entities: {
            is_active: active,
            official_code: officialCode,
            entity_id: id,
            entity_type_id:
              ClarisaCgiarEntityTypesEnum.getFromName(type)?.value,
          },
        },
        {
          entities: ['parent_entity_id IS NULL'],
        },
      );

      return manager
        .getRepository(Entities)
        .createQueryBuilder('entities')
        .leftJoinAndSelect(
          'entities.child_entity_array',
          'childEntity',
          'childEntity.is_active = true',
        )
        .leftJoinAndSelect(
          'childEntity.child_entity_array',
          'childEntity2',
          'childEntity2.is_active = true',
        )
        .leftJoinAndSelect('entities.entity_type_obj', 'entityType')
        .leftJoinAndSelect('childEntity.entity_type_obj', 'entityType2')
        .leftJoinAndSelect('childEntity2.entity_type_obj', 'entityType3')
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

  async findInitiativeFull(id?: number, active: number = 1) {
    const response = await this.dataSource.transaction(async (manager) => {
      const config = QueryUtil.buildQueryWhere(
        {
          entities: {
            is_active: active,
            entity_id: id,
            entity_type_id:
              ClarisaCgiarEntityTypesEnum.getFromName('initiatives')?.value,
          },
        },
        {
          entities: ['parent_entity_id IS NULL'],
        },
      );

      return manager
        .getRepository(Entities)
        .createQueryBuilder('entities')
        .leftJoinAndSelect(
          'entities.child_entity_array',
          'childEntity',
          'childEntity.is_active = true',
        )
        .leftJoinAndSelect(
          'childEntity.child_entity_array',
          'childEntity2',
          'childEntity2.is_active = true',
        )
        .leftJoin('entities.initiative_detail_obj', 'initiativeDetail')
        .leftJoinAndSelect(
          'initiativeDetail.clarisa_primary_action_area_obj',
          'cpaao',
        )
        .leftJoinAndSelect('initiativeDetail.status_obj', 'so')
        .addSelect('initiativeDetail.entity_initiative_id')
        .addSelect('initiativeDetail.clarisa_primary_action_area_id')
        .addSelect('initiativeDetail.status_id')
        .leftJoinAndSelect('entities.entity_type_obj', 'entityType')
        .leftJoinAndSelect('childEntity.entity_type_obj', 'entityType2')
        .leftJoinAndSelect('childEntity2.entity_type_obj', 'entityType3')
        .where(config.where, config.attr)
        .getMany()
        .then((res) => res);
    });
    return ResponseUtils.format<any>({
      message: `Initiative found successfully`,
      status: HttpStatus.OK,
      data: response,
    });
  }

  findBaseEntities(
    type?: string,
    entity_id?: number,
    officialCode?: string,
    active: number = 1,
  ) {
    const config = QueryUtil.buildQueryWhere(
      {
        entities: {
          is_active: active,
          official_code: officialCode,
          entity_id: entity_id,
          entity_type_id: ClarisaCgiarEntityTypesEnum.getFromName(type)?.value,
        },
      },
      {
        entities: ['parent_entity_id IS NULL'],
      },
    );
    return this._entitiesRepository
      .createQueryBuilder('entities')
      .leftJoinAndSelect('entities.entity_type_obj', 'entityType')
      .where(config.where, config.attr)
      .getMany()
      .then((res) =>
        ResponseUtils.format({
          message: `Success`,
          status: HttpStatus.OK,
          data: res,
        }),
      );
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
      {
        key: 'entity_id',
        value: entity_id,
      },
    );

    const TEMP_entity_center_array = ArrayUtil.update<EntityCenter>(
      reqSave.entity_center_array,
      entitytemp?.entity_center_array,
      'entity_center_id',
      {
        key: 'entity_id',
        value: entity_id,
      },
    );

    const TEMP_Entity: Entities = { ...entitytemp };
    const TEMP_InitiativeDetails: InitiativeDetail = {
      ...entitytemp?.initiative_detail_obj,
    };
    TEMP_Entity.short_name = reqSave?.short_name;
    TEMP_Entity.name = reqSave?.name;

    const reqInitDetails = reqSave.initiative_detail_obj;
    if (!reqInitDetails?.entity_initiative_id)
      TEMP_InitiativeDetails.entity_initiative_id = entity_id;

    TEMP_InitiativeDetails.user_lead_id = reqInitDetails?.user_lead_id;
    TEMP_InitiativeDetails.user_co_lead_id = reqInitDetails?.user_co_lead_id;
    TEMP_InitiativeDetails.clarisa_primary_action_area_id =
      reqInitDetails?.clarisa_primary_action_area_id;
    TEMP_InitiativeDetails.budget = reqInitDetails?.budget;

    delete TEMP_InitiativeDetails.clarisa_primary_action_area_obj;
    delete TEMP_InitiativeDetails.user_lead_obj;
    delete TEMP_InitiativeDetails.user_co_lead_obj;
    delete TEMP_Entity.entity_impact_area_array;
    delete TEMP_Entity.entity_center_array;
    delete TEMP_Entity.initiative_detail_obj;

    await this.dataSource.transaction(async (manager) => {
      const saveEntity = await manager
        .getRepository(Entities)
        .save(TEMP_Entity);
      await manager
        .getRepository(EntityImpactArea)
        .save(TEMP_entity_impact_area_array);
      await manager.getRepository(EntityCenter).save(TEMP_entity_center_array);
      await manager
        .getRepository(InitiativeDetail)
        .save(TEMP_InitiativeDetails);

      const roles = await manager.getRepository(Role).find({
        where: {
          clarisa_entity_type_id: entitytemp.entity_type_id,
          is_active: true,
        },
      });

      await this.changeOverviewUser(
        manager,
        {
          user_id: TEMP_InitiativeDetails?.user_lead_id,
          role: 'Lead',
        },
        {
          user_id: entitytemp.initiative_detail_obj.user_lead_id,
          role: 'Coordinator',
        },
        roles,
        saveEntity,
      );

      await this.changeOverviewUser(
        manager,
        {
          user_id: TEMP_InitiativeDetails?.user_co_lead_id,
          role: 'Co-Lead',
        },
        {
          user_id: entitytemp.initiative_detail_obj.user_co_lead_id,
          role: 'Coordinator',
        },
        roles,
        saveEntity,
      );
    });

    const dataUpdate =
      await this._entitiesRepository.findOneOverview(entity_id);

    return ResponseUtils.format({
      message: 'Overview was saved correctly!',
      status: HttpStatus.OK,
      data: dataUpdate,
    });
  }

  async changeOverviewUser(
    manager: EntityManager,
    new_user: {
      user_id: number;
      role: string;
    },
    old_user: {
      user_id: number;
      role: string;
    },
    roles: Role[],
    saveEntity: Entities,
  ) {
    await this._userRoleEntitiesService
      .updateRole(
        manager,
        new_user.user_id,
        roles.find((r) => r.role_name === new_user.role)?.role_id,
        saveEntity,
      )
      .then(async () => {
        if (new_user.user_id === old_user.user_id) return;
        await this._userRoleEntitiesService.updateRole(
          manager,
          old_user.user_id,
          roles.find((r) => r.role_name === old_user.role)?.role_id,
          saveEntity,
        );
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

  async saveOverviewExecutiveSummary(
    entity_id: number,
    executive_summary: string,
  ): Promise<ServiceResponseDto<InitiativeDetail>> {
    const TEMP_executive_summary_clean =
      RegexUtil.f.processHtmlTag(executive_summary) ?? null;

    let TEMP_update: Partial<InitiativeDetail> = {
      executive_summary_html: executive_summary,
      executive_summary: TEMP_executive_summary_clean,
    };

    const resInitiativeDetail = await this.dataSource.transaction(
      async (manager) => {
        let res: Partial<InitiativeDetail> = await manager
          .getRepository(InitiativeDetail)
          .findOne({
            where: {
              entity_initiative_id: entity_id,
            },
          });

        if (!res)
          res = {
            entity_initiative_id: entity_id,
          };

        const TEMP_save: Partial<InitiativeDetail> = { ...res, ...TEMP_update };

        await manager.getRepository(InitiativeDetail).save(TEMP_save);

        const resUpdate: InitiativeDetail = await manager
          .getRepository(InitiativeDetail)
          .findOne({
            where: {
              entity_initiative_id: entity_id,
            },
          });

        return resUpdate;
      },
    );

    return ResponseUtils.format({
      message: 'Overview was saved correctly!',
      status: HttpStatus.OK,
      data: resInitiativeDetail,
    });
  }

  findOverviewExecutiveSummary(
    entity_id: number,
  ): Promise<ServiceResponseDto<InitiativeDetail>> {
    const initiativeDetails = this.dataSource
      .getRepository(InitiativeDetail)
      .findOne({
        where: { entity_initiative_id: entity_id },
      });

    return initiativeDetails.then((res) =>
      Promise.resolve({
        message: 'Success',
        status: HttpStatus.OK,
        data: res,
      }),
    );
  }

  createInitiative(entity: CreateBaseEntityDto) {
    return this.dataSource
      .transaction(async (manager) => {
        const requiredFields = {
          name: 'Entity name is required!',
          short_name: 'Entity short name is required!',
          'initiative_detail_obj.clarisa_primary_action_area_id':
            'Primary action area is required!',
          official_code: 'Entity official code is required!',
        };

        for (const field in requiredFields) {
          const value = field.split('.').reduce((o, i) => o[i], entity);
          if (!value) {
            throw new BadRequestException(requiredFields[field]);
          }
        }

        const ifExists = await manager.getRepository(Entities).findOne({
          where: {
            official_code: entity.official_code,
            is_active: true,
          },
        });

        if (ifExists) {
          throw new ConflictException('Entity already exists!');
        }
        entity.entity_type_id = ClarisaCgiarEntityTypesEnum.Initiatives.value;
        const newEntity = await manager.getRepository(Entities).save(entity);
        await manager.getRepository(InitiativeDetail).save({
          entity_initiative_id: newEntity.entity_id,
          clarisa_primary_action_area_id:
            entity.initiative_detail_obj.clarisa_primary_action_area_id,
        });
        return newEntity;
      })
      .then((data) =>
        ResponseUtils.format({
          message: 'Entity created successfully!',
          data,
          status: HttpStatus.CREATED,
        }),
      );
  }
}
