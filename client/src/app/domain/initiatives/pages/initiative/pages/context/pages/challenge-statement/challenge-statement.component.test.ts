import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ChallengeStatementComponent } from './challenge-statement.component';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';

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
      ],
      declarations: [],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeStatementComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
