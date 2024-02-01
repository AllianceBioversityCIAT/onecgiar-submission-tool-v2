import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativesComponent } from './initiatives.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('InitiativesComponent', () => {
  let component: InitiativesComponent;
  let fixture: ComponentFixture<InitiativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitiativesComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InitiativesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
