import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { InnovationPortfolioAndMaComponent } from './innovation-portfolio-and-ma.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InnovationPortfolioAndMaComponent', () => {
  let component: InnovationPortfolioAndMaComponent;
  let fixture: ComponentFixture<InnovationPortfolioAndMaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        FieldContainerDirective,
        InnovationPortfolioAndMaComponent,
        HttpClientTestingModule,
      ],
      declarations: [],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationPortfolioAndMaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize innoPortfolioAndMA with null value', () => {
    expect(component.innoPortfolioAndMA().vision_management_approach_html).toBeNull();
  });

  it('should call getInnovationPortfolioAndMA on ngOnInit', () => {
    jest.spyOn(component, 'getInnovationPortfolioAndMA');
    component.ngOnInit();
    expect(component.getInnovationPortfolioAndMA).toHaveBeenCalled();
  });

  it('should set vision_management_approach_html when getInnovationPortfolioAndMA is called and response is successful', async () => {
    const mockResponse = {
      success: true,
      data: {
        data: {
          vision_management_approach_html: '<p>Challenge statement HTML</p>',
        },
      },
    };
    jest.spyOn(component.api, 'GET_InnovationPortfolioVisionAndMA').mockResolvedValue(mockResponse);
    await component.getInnovationPortfolioAndMA();
    expect(component.innoPortfolioAndMA().vision_management_approach_html).toBe(
      '<p>Challenge statement HTML</p>',
    );
  });

  it('should not set vision_management_approach_html when getInnovationPortfolioAndMA is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'GET_InnovationPortfolioVisionAndMA').mockResolvedValue(mockResponse);
    await component.getInnovationPortfolioAndMA();
    expect(component.innoPortfolioAndMA().vision_management_approach_html).toBeNull();
  });

  it('should call PATCH_InnovationPortfolioVisionAndMA and display success message when saveInnoPortfolioAndMASection is called and response is successful', async () => {
    const mockResponse = {
      data: null,
      success: true,
    };
    jest
      .spyOn(component.api, 'PATCH_InnovationPortfolioVisionAndMA')
      .mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');
    await component.saveInnoPortfolioAndMASection();
    expect(component.api.PATCH_InnovationPortfolioVisionAndMA).toHaveBeenCalledWith(
      component.innoPortfolioAndMA(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: 'Success',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });

  it('should call PATCH_InnovationPortfolioVisionAndMA and display error message when saveInnoPortfolioAndMASection is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest
      .spyOn(component.api, 'PATCH_InnovationPortfolioVisionAndMA')
      .mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');
    await component.saveInnoPortfolioAndMASection();
    expect(component.api.PATCH_InnovationPortfolioVisionAndMA).toHaveBeenCalledWith(
      component.innoPortfolioAndMA(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Success',
      detail: 'Error',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });
});
