import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { ParticipatoryDesignProcessComponent } from './participatory-design-process.component';
import { ApiService } from '../../../../../../../shared/services/api.service';
import { GlobalVariablesService } from '../../../../../../../shared/services/global-variables.service';

describe('ParticipatoryDesignProcessComponent', () => {
  let component: ParticipatoryDesignProcessComponent;
  let fixture: ComponentFixture<ParticipatoryDesignProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        ParticipatoryDesignProcessComponent,
        FieldContainerDirective,
        HttpClientTestingModule,
      ],
      declarations: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipatoryDesignProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize pDesignProcessBody with null value', () => {
    expect(component.pDesignProcessBody().participatory_desing_process_html).toBeNull();
  });

  it('should call getParticipatoryDesignProcess on component initialization', () => {
    jest.spyOn(component, 'getParticipatoryDesignProcess');
    component.ngOnInit();
    expect(component.getParticipatoryDesignProcess).toHaveBeenCalled();
  });

  it('should set pDesignProcessBody with response data on successful API call', async () => {
    const mockResponse = {
      success: true,
      data: {
        data: {
          participatory_desing_process_html: '<p>Mock participatory design process HTML</p>',
        },
      },
    };
    jest.spyOn(component.api, 'GET_ParticipatoryDesignProcess').mockResolvedValue(mockResponse);

    await component.getParticipatoryDesignProcess();

    expect(component.pDesignProcessBody().participatory_desing_process_html).toBe(
      mockResponse.data.data.participatory_desing_process_html,
    );
  });

  it('should not set pDesignProcessBody with response data on failed API call', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'GET_ParticipatoryDesignProcess').mockResolvedValue(mockResponse);

    await component.getParticipatoryDesignProcess();

    expect(component.pDesignProcessBody().participatory_desing_process_html).toBeNull();
  });

  // it('should call savePDesignProcessSection when isSavingSection is true', () => {
  //   jest.spyOn(component.globalVars, 'isSavingSection').mockReturnValue(true);
  //   jest.spyOn(component, 'savePDesignProcessSection');
  //   component.savePDesignProcessButtonEffect();
  //   expect(component.savePDesignProcessSection).toHaveBeenCalled();
  // });

  // it('should not call savePDesignProcessSection when isSavingSection is false', () => {
  //   jest.spyOn(component.globalVars, 'isSavingSection').mockReturnValue(false);
  //   jest.spyOn(component, 'savePDesignProcessSection');
  //   component.savePDesignProcessButtonEffect();
  //   expect(component.savePDesignProcessSection).not.toHaveBeenCalled();
  // });

  it('should call PATCH_ParticipatoryDesignProcess API and show success message on successful save', async () => {
    const mockResponse = {
      data: null,
      success: true,
    };
    jest.spyOn(component.api, 'PATCH_ParticipatoryDesignProcess').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');

    await component.savePDesignProcessSection();

    expect(component.api.PATCH_ParticipatoryDesignProcess).toHaveBeenCalledWith(
      component.pDesignProcessBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: 'Success',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });

  it('should call PATCH_ParticipatoryDesignProcess API and show error message on failed save', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'PATCH_ParticipatoryDesignProcess').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');

    await component.savePDesignProcessSection();

    expect(component.api.PATCH_ParticipatoryDesignProcess).toHaveBeenCalledWith(
      component.pDesignProcessBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Success',
      detail: 'Error',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });
});
