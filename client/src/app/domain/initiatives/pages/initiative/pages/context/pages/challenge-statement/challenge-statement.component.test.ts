import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ChallengeStatementComponent } from './challenge-statement.component';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChallengeStatementComponent', () => {
  let component: ChallengeStatementComponent;
  let fixture: ComponentFixture<ChallengeStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        EditorModule,
        ButtonModule,
        ChallengeStatementComponent,
        FieldContainerDirective,
        HttpClientTestingModule,
      ],
      declarations: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize challengeStatementBody with null value', () => {
    expect(component.challengeStatementBody().challenge_statement_html).toBeNull();
  });

  it('should call getChallengeStatement on ngOnInit', () => {
    jest.spyOn(component, 'getChallengeStatement');
    component.ngOnInit();
    expect(component.getChallengeStatement).toHaveBeenCalled();
  });

  it('should set challenge_statement_html when getChallengeStatement is called and response is successful', async () => {
    const mockResponse = {
      success: true,
      data: {
        data: {
          challenge_statement_html: '<p>Challenge statement HTML</p>',
        },
      },
    };
    jest.spyOn(component.api, 'GET_ChallengeStatement').mockResolvedValue(mockResponse);
    await component.getChallengeStatement();
    expect(component.challengeStatementBody().challenge_statement_html).toBe(
      '<p>Challenge statement HTML</p>',
    );
  });

  it('should not set challenge_statement_html when getChallengeStatement is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'GET_ChallengeStatement').mockResolvedValue(mockResponse);
    await component.getChallengeStatement();
    expect(component.challengeStatementBody().challenge_statement_html).toBeNull();
  });

  it('should call PATCH_ChallengeStatement and display success message when saveChallengeStatementSection is called and response is successful', async () => {
    const mockResponse = {
      data: null,
      success: true,
    };
    jest.spyOn(component.api, 'PATCH_ChallengeStatement').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');
    await component.saveChallengeStatementSection();
    expect(component.api.PATCH_ChallengeStatement).toHaveBeenCalledWith(
      component.challengeStatementBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: 'Success',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });

  it('should call PATCH_ChallengeStatement and display error message when saveChallengeStatementSection is called and response is not successful', async () => {
    const mockResponse = {
      data: null,
      success: false,
    };
    jest.spyOn(component.api, 'PATCH_ChallengeStatement').mockResolvedValue(mockResponse);
    jest.spyOn(component.messageService, 'add');
    jest.spyOn(component.globalVars.isSavingSection, 'set');
    await component.saveChallengeStatementSection();
    expect(component.api.PATCH_ChallengeStatement).toHaveBeenCalledWith(
      component.challengeStatementBody(),
    );
    expect(component.messageService.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Success',
      detail: 'Error',
    });
    expect(component.globalVars.isSavingSection.set).toHaveBeenCalledWith(false);
  });
});
