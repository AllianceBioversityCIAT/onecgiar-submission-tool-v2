import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativesListComponent } from './initiatives-list.component';

describe('InitiativesListComponent', () => {
  let component: InitiativesListComponent;
  let fixture: ComponentFixture<InitiativesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitiativesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InitiativesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
