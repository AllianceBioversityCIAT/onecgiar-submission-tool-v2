import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FieldContainerDirective } from '../../../../../../../shared/directives/field-container.directive';

@Component({
  selector: 'app-portfolio-linkages',
  standalone: true,
  imports: [FormsModule, EditorModule, ButtonModule, FieldContainerDirective],
  templateUrl: './portfolio-linkages.component.html',
  styleUrl: './portfolio-linkages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioLinkagesComponent {}
