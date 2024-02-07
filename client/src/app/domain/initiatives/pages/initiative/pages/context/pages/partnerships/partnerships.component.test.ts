import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { PartnershipsComponent } from './partnerships.component';

describe('PartnershipsComponent', () => {
  let component: PartnershipsComponent;
  let fixture: ComponentFixture<PartnershipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        PartnershipsComponent,
        FieldContainerDirective,
        HttpClientTestingModule,
      ],
      declarations: [],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnershipsComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize partnershipBody with null value', () => {
    expect(component.partnershipBody().partnerships_html).toBeNull();
  });

  it('should call getPartnerships method on component initialization', () => {
    jest.spyOn(component, 'getPartnerships');
    component.ngOnInit();
    expect(component.getPartnerships).toHaveBeenCalled();
  });

  it('should set partnerships_html value when getPartnerships is called and API response is successful', async () => {
    const mockResponse = {
      success: true,
      data: {
        data: {
          partnerships_html: '<p>Partnerships HTML</p>',
        },
      },
    };
    jest.spyOn(component.api, 'GET_Partnerships').mockResolvedValue(mockResponse);
    await component.getPartnerships();
    expect(component.partnershipBody().partnerships_html).toBe(
      mockResponse.data.data.partnerships_html,
    );
  });

  it('should not set partnerships_html value when getPartnerships is called and API response is unsuccessful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'GET_Partnerships').mockResolvedValue(mockResponse);
    await component.getPartnerships();
    expect(component.partnershipBody().partnerships_html).toBeNull();
  });

  it('should call PATCH_Partnerships API and show success message when savePartnershipsSection is called and API response is successful', async () => {
    const mockResponse = {
      data: null,
      success: true,
    };
    jest.spyOn(component.api, 'PATCH_Partnerships').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');

    await component.savePartnershipsSection();

    expect(component.api.PATCH_Partnerships).toHaveBeenCalledWith(component.partnershipBody());
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: 'Success',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });

  it('should call PATCH_Partnerships API and show error message when savePartnershipsSection is called and API response is unsuccessful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'PATCH_Partnerships').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');

    await component.savePartnershipsSection();

    expect(component.api.PATCH_Partnerships).toHaveBeenCalledWith(component.partnershipBody());
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Success',
      detail: 'Error',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });
});
