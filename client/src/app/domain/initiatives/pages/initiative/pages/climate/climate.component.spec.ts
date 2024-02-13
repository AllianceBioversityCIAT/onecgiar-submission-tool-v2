import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateComponent } from './climate.component';
import { FieldContainerDirective } from '../../../../../shared/directives/field-container.directive';
import { ButtonModule } from 'primeng/button';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';

describe('ClimateComponent', () => {
  let component: ClimateComponent;
  let fixture: ComponentFixture<ClimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        ClimateComponent,
        FieldContainerDirective,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize climateChangeFocusBody with null value', () => {
    expect(component.climateChangeFocusBody().climate_change_focus_p25_html).toBeNull();
  });

  it('should call getClimateChangeFocus on ngOnInit', () => {
    jest.spyOn(component, 'getClimateChangeFocus');
    component.ngOnInit();
    expect(component.getClimateChangeFocus).toHaveBeenCalled();
  });

  it('should set climate_change_focus_p25_html when getClimateChangeFocus is called and response is successful', async () => {
    const mockResponse = {
      success: true,
      data: {
        data: {
          climate_change_focus_p25_html: '<p>Climate change focus HTML</p>',
        },
      },
    };
    jest.spyOn(component.api, 'GET_ClimateChangeFocus').mockResolvedValue(mockResponse);
    await component.getClimateChangeFocus();
    expect(component.climateChangeFocusBody().climate_change_focus_p25_html).toBe(
      '<p>Climate change focus HTML</p>',
    );
  });

  it('should not set climate_change_focus_p25_html when getClimateChangeFocus is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'GET_ClimateChangeFocus').mockResolvedValue(mockResponse);
    await component.getClimateChangeFocus();
    expect(component.climateChangeFocusBody().climate_change_focus_p25_html).toBeNull();
  });

  it('should call PATCH_ClimateChangeFocus and display success message when saveClimateChangeFocusSection is called and response is successful', async () => {
    const mockResponse = {
      data: null,
      success: true,
    };
    jest.spyOn(component.api, 'PATCH_ClimateChangeFocus').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');
    await component.saveClimateChangeFocusSection();
    expect(component.api.PATCH_ClimateChangeFocus).toHaveBeenCalledWith(
      component.climateChangeFocusBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: 'Success',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });

  it('should call PATCH_ClimateChangeFocus and display error message when saveClimateChangeFocusSection is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'PATCH_ClimateChangeFocus').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');
    await component.saveClimateChangeFocusSection();
    expect(component.api.PATCH_ClimateChangeFocus).toHaveBeenCalledWith(
      component.climateChangeFocusBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Success',
      detail: 'Error',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });
});
