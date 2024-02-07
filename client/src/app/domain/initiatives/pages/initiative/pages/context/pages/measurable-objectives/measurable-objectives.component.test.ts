import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MeasurableObjectivesComponent } from './measurable-objectives.component';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';

describe('MeasurableObjectivesComponent', () => {
  let component: MeasurableObjectivesComponent;
  let fixture: ComponentFixture<MeasurableObjectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        MeasurableObjectivesComponent,
        FieldContainerDirective,
        HttpClientTestingModule,
      ],
      declarations: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurableObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize mesurableObjectivesBody with null value', () => {
    expect(component.mesurableObjectivesBody().measurable_three_year_html).toBeNull();
    expect(component.mesurableObjectivesBody().p25_initiative_model_html).toBeNull();
  });

  it('should call getMeasurableObjectives on ngOnInit', () => {
    jest.spyOn(component, 'getMeasurableObjectives');
    component.ngOnInit();
    expect(component.getMeasurableObjectives).toHaveBeenCalled();
  });

  it('should set measurable objectives body on successful API response', async () => {
    const mockResponse = {
      success: true,
      data: {
        data: {
          measurable_three_year_html: 'Mock measurable three year HTML',
          p25_initiative_model_html: 'Mock p25 initiative model HTML',
        },
      },
    };
    jest.spyOn(component.api, 'GET_MeasurableObjectives').mockResolvedValue(mockResponse);

    await component.getMeasurableObjectives();

    expect(component.mesurableObjectivesBody().measurable_three_year_html).toBe(
      'Mock measurable three year HTML',
    );
    expect(component.mesurableObjectivesBody().p25_initiative_model_html).toBe(
      'Mock p25 initiative model HTML',
    );
  });

  it('should not set measurable objectives body on unsuccessful API response', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'GET_MeasurableObjectives').mockResolvedValue(mockResponse);

    await component.getMeasurableObjectives();

    expect(component.mesurableObjectivesBody().measurable_three_year_html).toBeNull();
    expect(component.mesurableObjectivesBody().p25_initiative_model_html).toBeNull();
  });

  it('should call PATCH_MeasurableObjectives API and show success message on successful save', async () => {
    const mockResponse = {
      data: null,
      success: true,
    };
    jest.spyOn(component.api, 'PATCH_MeasurableObjectives').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');

    await component.saveMesurableObjectivesSection();

    expect(component.api.PATCH_MeasurableObjectives).toHaveBeenCalledWith(
      component.mesurableObjectivesBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: 'Success',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });

  it('should call PATCH_MeasurableObjectives API and show error message on unsuccessful save', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'PATCH_MeasurableObjectives').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');

    await component.saveMesurableObjectivesSection();
    expect(component.api.PATCH_MeasurableObjectives).toHaveBeenCalledWith(
      component.mesurableObjectivesBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Success',
      detail: 'Error',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });
});
