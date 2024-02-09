import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Entities } from '../../domain/entities/entities/entities.entity';

@Injectable()
export class EntitiesRepository extends Repository<Entities> {
  constructor(private dataSource: DataSource) {
    super(Entities, dataSource.createEntityManager());
  }

  findOneOverview(entity_id: number): Promise<Entities> {
    return this.dataSource.transaction(async (manager) => {
      const entity = manager
        .getRepository(Entities)
        .createQueryBuilder('entities')
        .leftJoinAndSelect(
          'entities.entity_center_array',
          'eca',
          'eca.is_active = true',
        )
        .leftJoinAndSelect(
          'entities.entity_impact_area_array',
          'eiaa',
          'eiaa.is_active = true',
        )
        .leftJoinAndSelect(
          'entities.initiative_detail_obj',
          'ido',
          'ido.is_active = true',
        )
        .leftJoinAndSelect('ido.user_co_lead_obj', 'uclo')
        .leftJoinAndSelect('ido.user_lead_obj', 'ulo')
        .leftJoinAndSelect('ido.clarisa_primary_action_area_obj', 'cpaai')
        .where(
          'entities.is_active = true AND entities.entity_id = :entity_id',
          { entity_id },
        )
        .getOne();

      return entity;
    });
  }
}
