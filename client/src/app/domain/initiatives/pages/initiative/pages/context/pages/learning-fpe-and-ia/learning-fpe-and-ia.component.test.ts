import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { LearningFpeAndIaComponent } from './learning-fpe-and-ia.component';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';

describe('LearningFpeAndIaComponent', () => {
  let component: LearningFpeAndIaComponent;
  let fixture: ComponentFixture<LearningFpeAndIaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        LearningFpeAndIaComponent,
        FieldContainerDirective,
        HttpClientTestingModule,
      ],
      declarations: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningFpeAndIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize learningFPEBody with null value', () => {
    expect(component.learningFPEBody().prior_evaluations_impact_assessments_html).toBeNull();
  });

  it('should call getLearningFpeAndIa on ngOnInit', () => {
    jest.spyOn(component, 'getLearningFpeAndIa');
    component.ngOnInit();
    expect(component.getLearningFpeAndIa).toHaveBeenCalled();
  });

  it('should set prior_evaluations_impact_assessments_html when getLearningFpeAndIa is called and response is successful', async () => {
    const mockResponse = {
      success: true,
      data: {
        data: {
          prior_evaluations_impact_assessments_html:
            '<p>Learning from prior evaluations and Impact Assessments</p>',
        },
      },
    };
    jest.spyOn(component.api, 'GET_LearningFPEAndIA').mockResolvedValue(mockResponse);

    await component.getLearningFpeAndIa();

    expect(component.learningFPEBody().prior_evaluations_impact_assessments_html).toBe(
      '<p>Learning from prior evaluations and Impact Assessments</p>',
    );
  });

  it('should not set prior_evaluations_impact_assessments_html when getLearningFpeAndIa is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'GET_LearningFPEAndIA').mockResolvedValue(mockResponse);

    await component.getLearningFpeAndIa();

    expect(component.learningFPEBody().prior_evaluations_impact_assessments_html).toBeNull();
  });

  it('should call PATCH_LearningFPEAndIA and display success message when saveLearningFPESection is called and response is successful', async () => {
    const mockResponse = {
      data: null,
      success: true,
    };
    jest.spyOn(component.api, 'PATCH_LearningFPEAndIA').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');

    await component.saveLearningFPESection();

    expect(component.api.PATCH_LearningFPEAndIA).toHaveBeenCalledWith(component.learningFPEBody());
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: 'Success',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });

  it('should call PATCH_LearningFPEAndIA and display error message when saveLearningFPESection is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'PATCH_LearningFPEAndIA').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');

    await component.saveLearningFPESection();

    expect(component.api.PATCH_LearningFPEAndIA).toHaveBeenCalledWith(component.learningFPEBody());
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Success',
      detail: 'Error',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });
});
