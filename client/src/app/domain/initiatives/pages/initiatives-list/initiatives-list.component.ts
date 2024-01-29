import { Component } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { InitiativesService } from './initiatives-list.service';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';

import { SliderModule } from 'primeng/slider';

import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

export interface IInitiative {
  acronym: string;
  action_area_description: string;
  action_area_id: string;
  active: number;
  description: string;
  id: number;
  inInit: number;
  initvStgId: number;
  name: string;
  official_code: string;
  stageId: number;
  stages?: any[];
  status: string;
}

@Component({
  selector: 'app-initiatives-list',
  standalone: true,
  imports: [
    TableModule,
    FormsModule,
    NgClass,
    ProgressBarModule,
    TagModule,
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    CurrencyPipe,
    DatePipe,
    ButtonModule,
    InputTextModule,
  ],
  providers: [InitiativesService],
  templateUrl: './initiatives-list.component.html',
  styleUrl: './initiatives-list.component.scss',
})
export class InitiativesListComponent {
  initiatives!: IInitiative[];
  statuses!: any[];
  loading: boolean = true;

  constructor(private initiativeService: InitiativesService) {}

  ngOnInit() {
    this.initiativeService.getInitiativesLarge().then((initiatives) => {
      this.initiatives = initiatives;
      this.loading = false;
    });

    this.statuses = [
      { label: 'Approved', value: 'Approved' },
      { label: 'Editing', value: 'Editing' },
    ];
  }

  clear(table: Table) {
    table.clear();
  }
}
