import { Component } from '@angular/core';
import { InnovationPortfolioAndMaComponent } from './pages/innovation-portfolio-and-ma/innovation-portfolio-and-ma.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-innovation-portfolio',
  standalone: true,
  templateUrl: './innovation-portfolio.component.html',
  styleUrl: './innovation-portfolio.component.scss',
  imports: [InnovationPortfolioAndMaComponent, RouterModule],
})
export class InnovationPortfolioComponent {}
