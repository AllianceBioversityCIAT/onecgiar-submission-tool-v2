import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { MeasurableObjectivesComponent } from './measurable-objectives.component';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';

describe('MeasurableObjectivesComponent', () => {
  let component: MeasurableObjectivesComponent;
  let fixture: ComponentFixture<MeasurableObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        MeasurableObjectivesComponent,
        FieldContainerDirective,
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(MeasurableObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
