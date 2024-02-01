import { Injectable } from '@angular/core';

@Injectable()
export class InitiativesService {
  getData() {
    return [
      {
        acronym: 'Accelerated Breeding',
        action_area_description: 'Genetic Innovation',
        action_area_id: '3',
        active: 1,
        description: 'Full Proposal ISDC Feedback',
        id: 1,
        inInit: 0,
        initvStgId: 71,
        name: 'Accelerated Breeding',
        official_code: 'INIT-01',
        stageId: 4,
        stages: [
          { id: 1, initvStgId: 1, stageId: 2, active: 0 },
          { id: 1, initvStgId: 34, stageId: 3, active: 0 },
        ],
        status: 'Approved',
      },
      {
        acronym: 'Genebanks',
        action_area_description: 'Genetic Innovation',
        action_area_id: '3',
        active: 1,
        description: 'Full Proposal ISDC Feedback',
        id: 3,
        inInit: 0,
        initvStgId: 73,
        name: 'Genebanks',
        official_code: 'INIT-03',
        stageId: 4,
        stages: [
          { id: 3, initvStgId: 3, stageId: 2, active: 0 },
          { id: 3, initvStgId: 35, stageId: 3, active: 0 },
        ],
        status: 'Approved',
      },
      {
        acronym: 'Breeding Resources',
        action_area_description: 'Genetic Innovation',
        action_area_id: '3',
        active: 1,
        description: 'Full Proposal ISDC Feedback',
        id: 4,
        inInit: 0,
        initvStgId: 74,
        name: 'Breeding Resources',
        official_code: 'INIT-04',
        stageId: 4,
        stages: [
          { id: 4, initvStgId: 4, stageId: 2, active: 0 },
          { id: 4, initvStgId: 36, stageId: 3, active: 0 },
        ],
        status: 'Approved',
      },
      {
        acronym: 'Market Intelligence',
        action_area_description: 'Genetic Innovation',
        action_area_id: '3',
        active: 1,
        description: 'Full Proposal ISDC Feedback',
        id: 5,
        inInit: 0,
        initvStgId: 75,
        name: 'Market Intelligence',
        official_code: 'INIT-05',
        stageId: 4,
        stages: [
          { id: 5, initvStgId: 5, stageId: 2, active: 0 },
          { id: 5, initvStgId: 37, stageId: 3, active: 0 },
        ],
        status: 'Approved',
      },
      {
        acronym: 'Seed Equal',
        action_area_description: 'Genetic Innovation',
        action_area_id: '3',
        active: 1,
        description: 'Full Proposal ISDC Feedback',
        id: 6,
        inInit: 0,
        initvStgId: 76,
        name: 'Seed Equal',
        official_code: 'INIT-06',
        stageId: 4,
        status: 'Editing',
      },
    ];
  }

  getInitiativesLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  }
}
