import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Clarisa } from './clarisa.connection';
import { ConfigService } from '@nestjs/config';
import { ClarisaCgiarEntityType } from './clarisa-cgiar-entity-types/entities/clarisa-cgiar-entity-type.entity';
import { DataSource } from 'typeorm';
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
  private ClarisaMessage<C>(entityClass: new () => C) {
    return {
      OK: `The data of ${entityClass.name} was saved correctly`,
      ERROR: `Error saving data of ${entityClass.name}`,
      START: `Start saving data of ${entityClass.name}`,
      FINALLY: `End saving data of ${entityClass.name}`,
    };
  }

  private async cloneData<C>(path: string, entityClass: new () => C) {
    const mss = this.ClarisaMessage(entityClass);
    this._logger.log(mss.START);
    this.clarisa.get(path).then((res) => {
      this.dataSource.transaction(async (manager) => {
        manager
          .getRepository(entityClass)
          .save(res as C)
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

    this.cloneData('un-regions', ClarisaRegion);
    this.cloneData('countries', ClarisaCountry);

    await this.cloneData('cgiar-entities', ClarisaCgiarEntity);
    await this.cloneData('cgiar-entity-types', ClarisaCgiarEntityType);
    await this.cloneData('impact-areas', ClarisaImpactArea);
    await this.cloneData('action-areas', ClarisaActionArea);
  }
}
