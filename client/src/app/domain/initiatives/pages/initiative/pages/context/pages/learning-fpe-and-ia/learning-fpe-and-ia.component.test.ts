import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LearningFpeAndIaComponent } from './learning-fpe-and-ia.component';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';

describe('LearningFpeAndIaComponent', () => {
  let component: LearningFpeAndIaComponent;
  let fixture: ComponentFixture<LearningFpeAndIaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        FieldContainerDirective,
        LearningFpeAndIaComponent,
      ],
      declarations: [],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(LearningFpeAndIaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
