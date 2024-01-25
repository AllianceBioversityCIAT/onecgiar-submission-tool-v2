import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Clarisa } from '../clarisa/clarisa.connection';
import { ConfigService } from '@nestjs/config';
import { ClarisaCgiarEntityType } from '../clarisa/clarisa-cgiar-entity-types/entities/clarisa-cgiar-entity-type.entity';
import { DataSource, In, Repository } from 'typeorm';
import { ResultsSdgTargetRepository } from '../../db/repositories/clarisa-cgiar-entity-type.repository';

@Injectable()
export class ClarisaTaskService {
  private clarisa: Clarisa;
  private readonly _logger = new Logger(ClarisaTaskService.name);
  constructor(
    private readonly _http: HttpService,
    private readonly _configService: ConfigService,
    private readonly dataSource: DataSource,

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

  private cloneData(
    path: string,
    repository: Repository<any>,
    Entity: Function,
  ) {
    const mss = this.ClarisaMessage(Entity);
    this._logger.log(mss.START);
    this.clarisa.get(path).then((res) => {
      repository
        .save(res)
        .then(() => {
          this._logger.log(mss.OK);
        })
        .catch((err) => {
          this._logger.log(mss.ERROR);
          this._logger.error(err);
        })
        .finally(() => {
          this._logger.log(mss.FINALLY);
        });
    });
  }

  bootstrap() {
    this.cloneData(
      'cgiar-entity-types',
      this._resultsSdgTarget,
      ClarisaCgiarEntityType,
    );
  }
}
