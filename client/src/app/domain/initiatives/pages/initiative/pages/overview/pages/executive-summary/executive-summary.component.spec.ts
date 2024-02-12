import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExecutiveSummaryComponent } from './executive-summary.component';

describe('ExecutiveSummaryComponent', () => {
  let component: ExecutiveSummaryComponent;
  let fixture: ComponentFixture<ExecutiveSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        ExecutiveSummaryComponent,
        FieldContainerDirective,
        HttpClientTestingModule,
      ],
      declarations: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize executiveSummaryBody with null value', () => {
    expect(component.executiveSummaryBody().executive_summary_html).toBeNull();
  });

  it('should call getExecutiveSummary on ngOnInit', () => {
    jest.spyOn(component, 'getExecutiveSummary');
    component.ngOnInit();
    expect(component.getExecutiveSummary).toHaveBeenCalled();
  });

  it('should set executive_summary_html when getExecutiveSummary is called and response is successful', async () => {
    const mockResponse = {
      success: true,
      data: {
        data: {
          executive_summary_html: '<p>Executive Summary HTML</p>',
        },
      },
    };
    jest.spyOn(component.api, 'GET_ExecutiveSummary').mockResolvedValue(mockResponse);
    await component.getExecutiveSummary();
    expect(component.executiveSummaryBody().executive_summary_html).toBe(
      '<p>Executive Summary HTML</p>',
    );
  });

  it('should not set executive_summary_html when getExecutiveSummary is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'GET_ExecutiveSummary').mockResolvedValue(mockResponse);
    await component.getExecutiveSummary();
    expect(component.executiveSummaryBody().executive_summary_html).toBeNull();
  });

  it('should call PATCH_ExecutiveSummary and display success message when saveExecutiveSummarySection is called and response is successful', async () => {
    const mockResponse = {
      data: null,
      success: true,
    };
    jest.spyOn(component.api, 'PATCH_ExecutiveSummary').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');
    await component.saveExecutiveSummarySection();
    expect(component.api.PATCH_ExecutiveSummary).toHaveBeenCalledWith(
      component.executiveSummaryBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: 'Success',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });

  it('should call PATCH_ExecutiveSummary and display error message when saveExecutiveSummarySection is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'PATCH_ExecutiveSummary').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');
    await component.saveExecutiveSummarySection();
    expect(component.api.PATCH_ExecutiveSummary).toHaveBeenCalledWith(
      component.executiveSummaryBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Success',
      detail: 'Error',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });
});
