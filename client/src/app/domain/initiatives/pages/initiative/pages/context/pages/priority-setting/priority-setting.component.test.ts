import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PrioritySettingComponent } from './priority-setting.component';

import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PrioritySettingComponent', () => {
  let component: PrioritySettingComponent;
  let fixture: ComponentFixture<PrioritySettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        PrioritySettingComponent,
        FieldContainerDirective,
        HttpClientTestingModule,
      ],
      declarations: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrioritySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize prioritySettingsBody with null value', () => {
    expect(component.prioritySettingsBody().priority_setting_html).toBeNull();
  });

  it('should call getPrioritySetting on ngOnInit', () => {
    jest.spyOn(component, 'getPrioritySetting');
    component.ngOnInit();
    expect(component.getPrioritySetting).toHaveBeenCalled();
  });

  it('should set priority_setting_html when getPrioritySetting is called and response is successful', async () => {
    const mockResponse = {
      success: true,
      data: {
        data: {
          priority_setting_html: '<p>Priority Setting HTML</p>',
        },
      },
    };
    jest.spyOn(component.api, 'GET_PrioritySetting').mockResolvedValue(mockResponse);
    await component.getPrioritySetting();
    expect(component.prioritySettingsBody().priority_setting_html).toBe(
      '<p>Priority Setting HTML</p>',
    );
  });

  it('should not set priority_setting_html when getPrioritySetting is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'GET_PrioritySetting').mockResolvedValue(mockResponse);
    await component.getPrioritySetting();
    expect(component.prioritySettingsBody().priority_setting_html).toBeNull();
  });

  it('should call PATCH_PrioritySetting and display success message when savePrioritySettingSection is called and response is successful', async () => {
    const mockResponse = {
      data: null,
      success: true,
    };
    jest.spyOn(component.api, 'PATCH_PrioritySetting').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');
    await component.savePrioritySettingSection();
    expect(component.api.PATCH_PrioritySetting).toHaveBeenCalledWith(
      component.prioritySettingsBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: 'Success',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });

  it('should call PATCH_PrioritySetting and display error message when savePrioritySettingSection is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'PATCH_PrioritySetting').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');
    await component.savePrioritySettingSection();
    expect(component.api.PATCH_PrioritySetting).toHaveBeenCalledWith(
      component.prioritySettingsBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Success',
      detail: 'Error',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });
});
