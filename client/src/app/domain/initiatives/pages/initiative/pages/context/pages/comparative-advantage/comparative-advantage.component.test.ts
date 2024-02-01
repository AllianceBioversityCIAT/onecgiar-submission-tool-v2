import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ComparativeAdvantageComponent } from './comparative-advantage.component';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';

describe('ComparativeAdvantageComponent', () => {
  let component: ComparativeAdvantageComponent;
  let fixture: ComponentFixture<ComparativeAdvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        FieldContainerDirective,
        ComparativeAdvantageComponent,
      ],
      declarations: [],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ComparativeAdvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
