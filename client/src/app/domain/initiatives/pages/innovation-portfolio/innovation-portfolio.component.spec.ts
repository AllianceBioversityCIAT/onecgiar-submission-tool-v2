import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationPortfolioComponent } from './innovation-portfolio.component';

describe('InnovationPortfolioComponent', () => {
  let component: InnovationPortfolioComponent;
  let fixture: ComponentFixture<InnovationPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InnovationPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InnovationPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
