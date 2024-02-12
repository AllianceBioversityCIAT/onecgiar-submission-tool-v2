import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InitiativeComponent } from './initiative.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('InitiativeComponent', () => {
  let component: InitiativeComponent;
  let fixture: ComponentFixture<InitiativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitiativeComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InitiativeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set currentInitiativeId on ngOnInit', () => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jest.fn().mockReturnValue('initiativeId'),
        },
      },
    };
    const mockGlobalVariablesService = {
      currentInitiativeId: {
        set: jest.fn(),
      },
    };

    component.activatedRoute = mockActivatedRoute as any;
    component.globalVars = mockGlobalVariablesService as any;

    component.ngOnInit();

    expect(mockGlobalVariablesService.currentInitiativeId.set).toHaveBeenCalledWith('initiativeId');
  });

  it('should set currentInitiativeId to empty string if no initiativeId is found on ngOnInit', () => {
    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: jest.fn().mockReturnValue(null),
        },
      },
    };
    const mockGlobalVariablesService = {
      currentInitiativeId: {
        set: jest.fn(),
      },
    };

    component.activatedRoute = mockActivatedRoute as any;
    component.globalVars = mockGlobalVariablesService as any;

    component.ngOnInit();

    expect(mockGlobalVariablesService.currentInitiativeId.set).toHaveBeenCalledWith('');
  });

  it('should set isSavingSection to true on saveSection', () => {
    const mockGlobalVariablesService = {
      isSavingSection: {
        set: jest.fn(),
      },
    };

    component.globalVars = mockGlobalVariablesService as any;

    component.saveSection();

    expect(mockGlobalVariablesService.isSavingSection.set).toHaveBeenCalledWith(true);
  });
});
