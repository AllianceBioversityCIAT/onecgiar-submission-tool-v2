import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoriesChangeComponent } from './theories-change.component';

describe('TheoriesChangeComponent', () => {
  let component: TheoriesChangeComponent;
  let fixture: ComponentFixture<TheoriesChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheoriesChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheoriesChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
