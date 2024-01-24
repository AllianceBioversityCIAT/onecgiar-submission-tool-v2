import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialResourcesComponent } from './financial-resources.component';

describe('FinancialResourcesComponent', () => {
  let component: FinancialResourcesComponent;
  let fixture: ComponentFixture<FinancialResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancialResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
