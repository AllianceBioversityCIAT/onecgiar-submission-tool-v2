import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeliaComponent } from './melia.component';

describe('MeliaComponent', () => {
  let component: MeliaComponent;
  let fixture: ComponentFixture<MeliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeliaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
