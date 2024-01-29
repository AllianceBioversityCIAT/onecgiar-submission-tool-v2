import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InitiativesService {
  getData() {
    return [
      // {
      //   id: 1000,
      //   name: 'James Butt',
      //   country: {
      //     name: 'Algeria',
      //     code: 'dz',
      //   },
      //   company: 'Benton, John B Jr',
      //   date: '2015-09-13',
      //   status: 'unqualified',
      //   verified: true,
      //   activity: 17,
      //   representative: {
      //     name: 'Ioni Bowcher',
      //     image: 'ionibowcher.png',
      //   },
      //   balance: 70663,
      // },
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

  constructor(private http: HttpClient) {}

  getInitiativesMini() {
    return Promise.resolve(this.getData().slice(0, 5));
  }

  getInitiativesSmall() {
    return Promise.resolve(this.getData().slice(0, 10));
  }

  getInitiativesMedium() {
    return Promise.resolve(this.getData().slice(0, 50));
  }

  getInitiativesLarge() {
    return Promise.resolve(this.getData().slice(0, 200));
  }

  getInitiativesXLarge() {
    return Promise.resolve(this.getData());
  }

  getInitiatives(params?: any) {
    return this.http
      .get<any>('https://www.primefaces.org/data/customers', { params: params })
      .toPromise();
  }
}
