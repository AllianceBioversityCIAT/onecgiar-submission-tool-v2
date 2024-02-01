import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativeComponent } from './initiative.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('InitiativeComponent', () => {
  let component: InitiativeComponent;
  let fixture: ComponentFixture<InitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitiativeComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InitiativeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
