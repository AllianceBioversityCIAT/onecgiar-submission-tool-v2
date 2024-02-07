import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { PortfolioLinkagesComponent } from './portfolio-linkages.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PortfolioLinkagesComponent', () => {
  let component: PortfolioLinkagesComponent;
  let fixture: ComponentFixture<PortfolioLinkagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        PortfolioLinkagesComponent,
        FieldContainerDirective,
        HttpClientTestingModule,
      ],
      declarations: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLinkagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize portfolioLinkagesBody with null value', () => {
    expect(component.portfolioLinkagesBody().portfolio_linkages_html).toBeNull();
  });

  it('should call getPortfolioLinkages on ngOnInit', () => {
    jest.spyOn(component, 'getPortfolioLinkages');
    component.ngOnInit();
    expect(component.getPortfolioLinkages).toHaveBeenCalled();
  });

  it('should set portfolio_linkages_html when getPortfolioLinkages is called and response is successful', async () => {
    const mockResponse = {
      success: true,
      data: {
        data: {
          portfolio_linkages_html: '<p>Portfolio linkages HTML</p>',
        },
      },
    };
    jest.spyOn(component.api, 'GET_PortfolioLinkages').mockResolvedValue(mockResponse);
    await component.getPortfolioLinkages();
    expect(component.portfolioLinkagesBody().portfolio_linkages_html).toBe(
      '<p>Portfolio linkages HTML</p>',
    );
  });

  it('should not set portfolio_linkages_html when getPortfolioLinkages is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'GET_PortfolioLinkages').mockResolvedValue(mockResponse);
    await component.getPortfolioLinkages();
    expect(component.portfolioLinkagesBody().portfolio_linkages_html).toBeNull();
  });

  it('should call PATCH_PortfolioLinkages and display success message when savePortfolioLinkagesSection is called and response is successful', async () => {
    const mockResponse = {
      data: null,
      success: true,
    };
    jest.spyOn(component.api, 'PATCH_PortfolioLinkages').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');
    await component.savePortfolioLinkagesSection();
    expect(component.api.PATCH_PortfolioLinkages).toHaveBeenCalledWith(
      component.portfolioLinkagesBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: 'Success',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });

  it('should call PATCH_PortfolioLinkages and display error message when savePortfolioLinkagesSection is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'PATCH_PortfolioLinkages').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');
    await component.savePortfolioLinkagesSection();
    expect(component.api.PATCH_PortfolioLinkages).toHaveBeenCalledWith(
      component.portfolioLinkagesBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Success',
      detail: 'Error',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });
});
