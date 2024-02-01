import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ParticipatoryDesignProcessComponent } from './participatory-design-process.component';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';

describe('ParticipatoryDesignProcessComponent', () => {
  let component: ParticipatoryDesignProcessComponent;
  let fixture: ComponentFixture<ParticipatoryDesignProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        FieldContainerDirective,
        ParticipatoryDesignProcessComponent,
      ],
      declarations: [],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipatoryDesignProcessComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
