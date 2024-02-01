import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PortfolioLinkagesComponent } from './portfolio-linkages.component';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';

describe('PortfolioLinkagesComponent', () => {
  let component: PortfolioLinkagesComponent;
  let fixture: ComponentFixture<PortfolioLinkagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        FieldContainerDirective,
        PortfolioLinkagesComponent,
      ],
      declarations: [],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLinkagesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
