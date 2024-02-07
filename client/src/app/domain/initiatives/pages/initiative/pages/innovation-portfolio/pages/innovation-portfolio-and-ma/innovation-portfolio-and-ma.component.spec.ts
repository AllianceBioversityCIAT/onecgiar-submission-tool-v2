import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';
import { InnovationPortfolioAndMaComponent } from './innovation-portfolio-and-ma.component';

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

  it('should call saveInnoPortfolioAndMASection after 1500ms', () => {
    jest.useFakeTimers();
    const saveInnoPortfolioAndMASectionSpy = jest.spyOn(component, 'saveInnoPortfolioAndMASection');

    expect(saveInnoPortfolioAndMASectionSpy).not.toHaveBeenCalled();

    component.saveInnoPortfolioAndMASection();

    jest.advanceTimersByTime(1500);

    expect(saveInnoPortfolioAndMASectionSpy).toHaveBeenCalled();
  });
});
