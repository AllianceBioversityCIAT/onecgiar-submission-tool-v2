import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { OverviewComponent } from './overview.component';
import { InputTextModule } from 'primeng/inputtext';
import { FieldContainerDirective } from '../../../../../shared/directives/field-container.directive';
import { DropdownModule } from 'primeng/dropdown';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        InputTextModule,
        FieldContainerDirective,
        DropdownModule,
        OverviewComponent,
      ],
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update signal', () => {
    const signalName = 'value1';
    const e = 'new value';

    component.updateSignal(e, signalName);

    expect(component.body().value1).toBe(e);
  });
});
