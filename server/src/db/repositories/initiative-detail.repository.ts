import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InitiativeDetail } from '../../domain/entities/initiative-details/entities/initiative-detail.entity';

@Injectable()
export class InitiativeDetailRepository extends Repository<InitiativeDetail> {
  constructor(private dataSource: DataSource) {
    super(InitiativeDetail, dataSource.createEntityManager());
  }

  findOneSelect(
    entity_id: number,
    select: (keyof InitiativeDetail & string)[] = [],
  ): Promise<InitiativeDetail> {
    return this.findOne({
      where: {
        entity_initiative_id: entity_id,
        entity_obj: { is_active: true },
      },
      select: select,
    });
  }
}
