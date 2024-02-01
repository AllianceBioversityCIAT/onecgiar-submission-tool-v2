import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativesListComponent } from './initiatives-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InitiativesListComponent', () => {
  let component: InitiativesListComponent;
  let fixture: ComponentFixture<InitiativesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitiativesListComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InitiativesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('clear', () => {
    it('should clear the table', () => {
      const table: any = {
        clear: jest.fn(),
        document: null,
        platformId: null,
        renderer: null,
        el: null,
      };

      component.clear(table);

      expect(table.clear).toHaveBeenCalled();
    });
  });
});
