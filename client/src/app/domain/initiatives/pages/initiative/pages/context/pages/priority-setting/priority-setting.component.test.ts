import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';

import { PrioritySettingComponent } from './priority-setting.component';

describe('PrioritySettingComponent', () => {
  let component: PrioritySettingComponent;
  let fixture: ComponentFixture<PrioritySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        FieldContainerDirective,
        PrioritySettingComponent,
      ],
      declarations: [],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioritySettingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
