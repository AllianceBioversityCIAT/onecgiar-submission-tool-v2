import { Injectable, computed, inject, signal } from '@angular/core';
import { ToPromiseService } from '../../to-promise.service';
import { MainResponse } from '../../../interfaces/responses.interface';
import { ActionAreaItem } from '../../../interfaces/control-lists-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ActionAreasListService {
  TP = inject(ToPromiseService);
  list = signal([] as ActionAreaItem[]);
  constructor() {
    this.getList();
  }

  private async getList() {
    const response = await this.GET_ActionAreas();
    this.list.set(response.data);
  }

  private GET_ActionAreas = (): Promise<MainResponse<ActionAreaItem[]>> => {
    const url = () => `api/clarisa/action-areas`;
    return this.TP.get(url(), { flatten: true });
  };
}
