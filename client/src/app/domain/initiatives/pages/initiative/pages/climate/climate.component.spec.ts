import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateComponent } from './climate.component';
import { FieldContainerDirective } from '../../../../../shared/directives/field-container.directive';
import { ButtonModule } from 'primeng/button';

describe('ClimateComponent', () => {
  let component: ClimateComponent;
  let fixture: ComponentFixture<ClimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonModule, FieldContainerDirective, ClimateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call saveClimateChangeFocusSection after 1500ms', () => {
    jest.useFakeTimers();
    const saveClimateChangeFocusSectionSpy = jest.spyOn(component, 'saveClimateChangeFocusSection');

    expect(saveClimateChangeFocusSectionSpy).not.toHaveBeenCalled();
    component.saveClimateChangeFocusSection();
    jest.advanceTimersByTime(1500);
    expect(saveClimateChangeFocusSectionSpy).toHaveBeenCalled();
  });
});
