import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { InnovationPackagesAndSrpComponent } from './innovation-packages-and-srp.component';

describe('InnovationPackagesAndSrpComponent', () => {
  let component: InnovationPackagesAndSrpComponent;
  let fixture: ComponentFixture<InnovationPackagesAndSrpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        FieldContainerDirective,
        InnovationPackagesAndSrpComponent,
      ],
      declarations: [],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationPackagesAndSrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call saveInnoPackagesAndSRPSection after 1500ms', () => {
    jest.useFakeTimers();
    const saveInnoPackagesAndSRPSectionSpy = jest.spyOn(component, 'saveInnoPackagesAndSRPSection');

    expect(saveInnoPackagesAndSRPSectionSpy).not.toHaveBeenCalled();

    component.saveInnoPackagesAndSRPSection();

    jest.advanceTimersByTime(1500);

    expect(saveInnoPackagesAndSRPSectionSpy).toHaveBeenCalled();
  });
});
