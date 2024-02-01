import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InitiativeService {
  currentInitiativeId = signal('');
  constructor() {}
}
