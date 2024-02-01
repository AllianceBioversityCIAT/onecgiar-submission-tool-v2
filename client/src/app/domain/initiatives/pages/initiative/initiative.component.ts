import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InitiativeService } from './services/initiative.service';

@Component({
  selector: 'app-initiative',
  standalone: true,
  imports: [RouterModule, SidebarComponent],
  templateUrl: './initiative.component.html',
  styleUrl: './initiative.component.scss',
})
export class InitiativeComponent {
  private activatedRoute = inject(ActivatedRoute);
  private initiativeSE = inject(InitiativeService);

  constructor() {
    this.initiativeSE.currentInitiativeId.set(
      this.activatedRoute.snapshot.paramMap.get('initiativeId') ?? '',
    );
  }
}
