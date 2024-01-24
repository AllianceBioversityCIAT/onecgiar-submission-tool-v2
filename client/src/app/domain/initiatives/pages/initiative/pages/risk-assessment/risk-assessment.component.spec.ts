import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAssessmentComponent } from './risk-assessment.component';

describe('RiskAssessmentComponent', () => {
  let component: RiskAssessmentComponent;
  let fixture: ComponentFixture<RiskAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskAssessmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RiskAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
