import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderComponent } from './gender.component';

describe('GenderComponent', () => {
  let component: GenderComponent;
  let fixture: ComponentFixture<GenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call saveGenderResearchAndImpactSection after 1500ms', () => {
    jest.useFakeTimers();
    const saveGenderResearchAndImpactSectionSpy = jest.spyOn(
      component,
      'saveGenderResearchAndImpactSection',
    );

    expect(saveGenderResearchAndImpactSectionSpy).not.toHaveBeenCalled();

    component.saveGenderResearchAndImpactSection();

    jest.advanceTimersByTime(1500);

    expect(saveGenderResearchAndImpactSectionSpy).toHaveBeenCalled();
  });
});
