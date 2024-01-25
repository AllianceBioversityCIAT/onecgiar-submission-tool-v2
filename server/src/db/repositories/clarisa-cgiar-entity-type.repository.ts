import { Injectable } from '@nestjs/common';
import { ClarisaCgiarEntityType } from '../../tools/clarisa/clarisa-cgiar-entity-types/entities/clarisa-cgiar-entity-type.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ResultsSdgTargetRepository extends Repository<ClarisaCgiarEntityType> {
  constructor(private dataSource: DataSource) {
    super(ClarisaCgiarEntityType, dataSource.createEntityManager());
  }
}
