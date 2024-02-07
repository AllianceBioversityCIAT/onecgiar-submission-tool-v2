import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { ApiService } from '../api.service';
import { MainResponse } from '../../interfaces/responses.interface';
import { ToPromiseService } from '../to-promise.service';
import { InitiativeItem } from '../../interfaces/control-lists-response.interface';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitativeListService {
  TP = inject(ToPromiseService);
  list: WritableSignal<InitiativeItem[]> = signal([]);
  constructor() {
    this.update();
  }

  async update() {
    const response = await this.GET_initiatives_with_base_info();
    this.list.set(response.data);
    console.log(this.list());
    const response2 = await this.GET_initiatives();
    console.log(response2);
  }

  private GET_initiatives_with_base_info = (): Promise<MainResponse<InitiativeItem[]>> => {
    const url = () => 'api/entity/base';
    return this.TP.get(url(), { flatten: true });
  };

  private GET_initiatives = (): Promise<MainResponse<InitiativeItem[]>> => {
    const url = () => 'api/entity';
    return this.TP.get(url(), { flatten: true });
  };
}
