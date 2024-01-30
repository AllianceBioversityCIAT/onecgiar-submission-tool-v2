import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Clarisa } from './clarisa.connection';
import { ConfigService } from '@nestjs/config';
import { ClarisaCgiarEntityType } from './clarisa-cgiar-entity-types/entities/clarisa-cgiar-entity-type.entity';
import { DataSource, Repository } from 'typeorm';
import { ResultsSdgTargetRepository } from '../../db/repositories/clarisa-cgiar-entity-type.repository';
import { ClarisaActionArea } from './clarisa-action-areas/entities/clarisa-action-area.entity';
import { ClarisaCountry } from './clarisa-countries/entities/clarisa-country.entity';
import { ClarisaRegion } from './clarisa-regions/entities/clarisa-region.entity';
import { ClarisaCgiarEntity } from './clarisa-cgiar-entities/entities/clarisa-cgiar-entity.entity';
import { ClarisaImpactArea } from './clarisa-impact-areas/entities/clarisa-impact-area.entity';

@Injectable()
export class ClarisaTaskService {
  private clarisa: Clarisa;
  private readonly _logger = new Logger(ClarisaTaskService.name);
  constructor(
    private readonly _http: HttpService,
    private readonly _configService: ConfigService,
    private dataSource: DataSource,
    private readonly _resultsSdgTarget: ResultsSdgTargetRepository,
  ) {
    this.clarisa = new Clarisa(this._http, {
      password: this._configService.get<string>('CLARISA_PASSWORD'),
      username: this._configService.get<string>('CLARISA_USERNAME'),
    });
  }
  private ClarisaMessage(Entity: Function) {
    return {
      OK: `The data of ${Entity.name} was saved correctly`,
      ERROR: `Error saving data of ${Entity.name}`,
      START: `Start saving data of ${Entity.name}`,
      FINALLY: `End saving data of ${Entity.name}`,
    };
  }

  private cloneData(path: string, Entity: Function) {
    const mss = this.ClarisaMessage(Entity);
    this._logger.log(mss.START);
    this.clarisa.get(path).then((res) => {
      this.dataSource.transaction(async (manager) => {
        manager
          .getRepository(Entity)
          .save(res)
          .then(() => {
            this._logger.log(mss.OK);
          })
          .catch((err) => {
            this._logger.error(mss.ERROR);
            this._logger.error(err);
          })
          .finally(() => {
            this._logger.log(mss.FINALLY);
          });
      });
    });
  }

  async bootstrap() {
    this._logger.verbose(`Start saving data of ${ClarisaTaskService.name}`);

    await this.cloneData('cgiar-entity-types', ClarisaCgiarEntityType);
    await this.cloneData('action-areas', ClarisaActionArea);
    await this.cloneData('countries', ClarisaCountry);
    await this.cloneData('un-regions', ClarisaRegion);
    await this.cloneData('cgiar-entities', ClarisaCgiarEntity);
    await this.cloneData('impact-areas', ClarisaImpactArea);
  }
}
