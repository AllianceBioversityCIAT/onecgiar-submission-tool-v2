import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderComponent } from './gender.component';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../shared/directives/field-container.directive';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GenderComponent', () => {
  let component: GenderComponent;
  let fixture: ComponentFixture<GenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        GenderComponent,
        FieldContainerDirective,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize genderResearchAndImpactBody with null value', () => {
    expect(component.genderResearchAndImpactBody().gender_research_impact_p25_html).toBeNull();
  });

  it('should call getGenderResearchAndImpact on ngOnInit', () => {
    jest.spyOn(component, 'getGenderResearchAndImpact');
    component.ngOnInit();
    expect(component.getGenderResearchAndImpact).toHaveBeenCalled();
  });

  it('should set gender_research_impact_p25_html when getGenderResearchAndImpact is called and response is successful', async () => {
    const mockResponse = {
      success: true,
      data: {
        data: {
          gender_research_impact_p25_html: '<p>Gender research impact HTML</p>',
        },
      },
    };
    jest.spyOn(component.api, 'GET_GenderResearchAndImpact').mockResolvedValue(mockResponse);
    await component.getGenderResearchAndImpact();
    expect(component.genderResearchAndImpactBody().gender_research_impact_p25_html).toBe(
      '<p>Gender research impact HTML</p>',
    );
  });

  it('should not set gender_research_impact_p25_html when getGenderResearchAndImpact is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'GET_GenderResearchAndImpact').mockResolvedValue(mockResponse);
    await component.getGenderResearchAndImpact();
    expect(component.genderResearchAndImpactBody().gender_research_impact_p25_html).toBeNull();
  });

  it('should call PATCH_GenderResearchAndImpact and display success message when saveGenderResearchAndImpactSection is called and response is successful', async () => {
    const mockResponse = {
      data: null,
      success: true,
    };
    jest.spyOn(component.api, 'PATCH_GenderResearchAndImpact').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');
    await component.saveGenderResearchAndImpactSection();
    expect(component.api.PATCH_GenderResearchAndImpact).toHaveBeenCalledWith(
      component.genderResearchAndImpactBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: 'Success',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });

  it('should call PATCH_GenderResearchAndImpact and display error message when saveGenderResearchAndImpactSection is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'PATCH_GenderResearchAndImpact').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');
    await component.saveGenderResearchAndImpactSection();
    expect(component.api.PATCH_GenderResearchAndImpact).toHaveBeenCalledWith(
      component.genderResearchAndImpactBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Success',
      detail: 'Error',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });
});
