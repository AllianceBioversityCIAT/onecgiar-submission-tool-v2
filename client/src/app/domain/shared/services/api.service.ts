import { Injectable, inject } from '@angular/core';
import { ToPromiseService } from './to-promise.service';
import { LoginRes, MainResponse } from '../interfaces/responses.interface';
import { environment } from '../../../../environments/environment.development';
import { GlobalVariablesService } from './global-variables.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  TP = inject(ToPromiseService);
  public globalVars = inject(GlobalVariablesService);

  getExample = () => {
    const url = () => 'https://jsonplaceholder.typicode.com/users';
    return this.TP.get(url());
  };

  login = (awsToken: string): Promise<MainResponse<LoginRes>> => {
    const url = () => `http://localhost:3002/auth/login`;
    return this.TP.post(url(), {}, awsToken);
  };

  // Context - Challenge Statement
  GET_ChallengeStatement = (): Promise<MainResponse<any>> => {
    const url = () =>
      `${environment.apiBaseUrl}/entity/${this.globalVars.currentInitiativeId()}/initiative-details/challenge-statement`;
    return this.TP.get(url());
  };

  PATCH_ChallengeStatement = (body: any): Promise<MainResponse<any>> => {
    const url = () =>
      `${environment.apiBaseUrl}/entity/${this.globalVars.currentInitiativeId()}/initiative-details/challenge-statement/save`;
    return this.TP.patch(url(), body);
  };

  // Context - Measurable Objectives
  GET_MeasurableObjectives = (): Promise<MainResponse<any>> => {
    const url = () =>
      `${environment.apiBaseUrl}/entity/${this.globalVars.currentInitiativeId()}/initiative-details/measurable-three-year-outcome`;
    return this.TP.get(url());
  };

  PATCH_MeasurableObjectives = (body: any): Promise<MainResponse<any>> => {
    const url = () =>
      `${environment.apiBaseUrl}/entity/${this.globalVars.currentInitiativeId()}/initiative-details/measurable-three-year-outcome/save`;
    return this.TP.patch(url(), body);
  };

  // Context - Comparative Advantage

  // Context - Partnerships
  GET_Partnerships = (): Promise<MainResponse<any>> => {
    const url = () =>
      `${environment.apiBaseUrl}/entity/${this.globalVars.currentInitiativeId()}/initiative-details/partnerships`;
    return this.TP.get(url());
  };

  PATCH_Partnerships = (body: any): Promise<MainResponse<any>> => {
    const url = () =>
      `${environment.apiBaseUrl}/entity/${this.globalVars.currentInitiativeId()}/initiative-details/partnerships/save`;
    return this.TP.patch(url(), body);
  };

  // Context - Learning FPE and IA
  GET_LearningFPEAndIA = (): Promise<MainResponse<any>> => {
    const url = () =>
      `${environment.apiBaseUrl}/entity/${this.globalVars.currentInitiativeId()}/initiative-details/prio-evaluation-impact-assessments`;
    return this.TP.get(url());
  };

  PATCH_LearningFPEAndIA = (body: any): Promise<MainResponse<any>> => {
    const url = () =>
      `${environment.apiBaseUrl}/entity/${this.globalVars.currentInitiativeId()}/initiative-details/prio-evaluation-impact-assessments/save`;
    return this.TP.patch(url(), body);
  };

  // Context - Priority Setting
  GET_PrioritySetting = (): Promise<MainResponse<any>> => {
    const url = () =>
      `${environment.apiBaseUrl}/entity/${this.globalVars.currentInitiativeId()}/initiative-details/priority-setting`;
    return this.TP.get(url());
  };

  PATCH_PrioritySetting = (body: any): Promise<MainResponse<any>> => {
    const url = () =>
      `${environment.apiBaseUrl}/entity/${this.globalVars.currentInitiativeId()}/initiative-details/priority-setting/save`;
    return this.TP.patch(url(), body);
  };

  // Context - Participatory Design Process
  GET_ParticipatoryDesignProcess = (): Promise<MainResponse<any>> => {
    const url = () =>
      `${environment.apiBaseUrl}/entity/${this.globalVars.currentInitiativeId()}/initiative-details/participatory-desing-process`;
    return this.TP.get(url());
  };

  PATCH_ParticipatoryDesignProcess = (body: any): Promise<MainResponse<any>> => {
    const url = () =>
      `${environment.apiBaseUrl}/entity/${this.globalVars.currentInitiativeId()}/initiative-details/participatory-desing-process/save`;
    return this.TP.patch(url(), body);
  };

  // Context - Portfolio Linkages
  GET_PortfolioLinkages = (): Promise<MainResponse<any>> => {
    const url = () =>
      `${environment.apiBaseUrl}/entity/${this.globalVars.currentInitiativeId()}/initiative-details/portfolio-linkage`;
    return this.TP.get(url());
  };

  PATCH_PortfolioLinkages = (body: any): Promise<MainResponse<any>> => {
    const url = () =>
      `${environment.apiBaseUrl}/entity/${this.globalVars.currentInitiativeId()}/initiative-details/portfolio-linkage/save`;
    return this.TP.patch(url(), body);
  };
}
