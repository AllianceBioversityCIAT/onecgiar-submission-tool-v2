import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleCultureComponent } from './people-culture.component';

describe('PeopleCultureComponent', () => {
  let component: PeopleCultureComponent;
  let fixture: ComponentFixture<PeopleCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleCultureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeopleCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
