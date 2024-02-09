import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InitiativeDetailRepository } from '../../../db/repositories/initiative-detail.repository';
import { InitiativeDetail } from './entities/initiative-detail.entity';
import { RegexUtil } from '../../shared/utils/regex.utils';
import { UpdateInitiativeDetailDto } from './dto/update-initiative-detail.dto';
import { ResponseUtils } from '../../shared/utils/response.utils';
import { ServiceResponseDto } from '../../shared/global-dto/service-response.dto';

@Injectable()
export class InitiativeDetailsService {
  constructor(
    private readonly _initiativeDetailRepository: InitiativeDetailRepository,
  ) {}

  findContextData(
    entity_id: number,
    select: (keyof InitiativeDetail & string)[] = [],
  ) {
    const res = this._initiativeDetailRepository.findOneSelect(
      entity_id,
      select,
    );
    return res.then((data) =>
      ResponseUtils.format({
        message: 'Success',
        data,
        status: HttpStatus.OK,
      }),
    );
  }

  async saveContexData(
    entity_id: number,
    reqInitDetails: Partial<InitiativeDetail>,
    keys: (keyof InitiativeDetail)[],
  ): Promise<ServiceResponseDto<Partial<InitiativeDetail>>> {
    const challenge = await this._initiativeDetailRepository.findOne({
      where: {
        entity_initiative_id: entity_id,
        is_active: true,
      },
    });

    let NEW_challenge = this.updateObject(reqInitDetails, keys);

    NEW_challenge = this.ifNotExistsCreate(entity_id, NEW_challenge, challenge);

    await this._initiativeDetailRepository.save(NEW_challenge);

    return ResponseUtils.format({
      message: 'Challenge statement was saved correctly!',
      status: HttpStatus.OK,
      data: NEW_challenge,
    });
  }

  private updateObject<T>(cliReq: any, keys: (keyof T & string)[]): Partial<T> {
    let NEW_obj: any = {};
    keys.forEach((el) => {
      const TEMP_key = el.replace(RegexUtil.attrIsHtml, '');
      NEW_obj[el] = cliReq[el] ?? null;
      NEW_obj[TEMP_key] = RegexUtil.f.processHtmlTag(cliReq[el]) ?? null;
    });

    return NEW_obj as Partial<T>;
  }

  private ifNotExistsCreate(
    entity_id: number,
    NEW_challenge: Partial<InitiativeDetail>,
    challenge: InitiativeDetail,
  ) {
    if (!challenge) {
      NEW_challenge = {
        ...NEW_challenge,
        entity_initiative_id: entity_id,
      };
    } else {
      NEW_challenge = { ...challenge, ...NEW_challenge };
    }

    return NEW_challenge;
  }
}
