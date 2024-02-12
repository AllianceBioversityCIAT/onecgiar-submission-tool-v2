import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GlobalVariablesService } from '../../../shared/services/global-variables.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-initiative',
  standalone: true,
  imports: [RouterModule, SidebarComponent, ButtonModule],
  templateUrl: './initiative.component.html',
  styleUrl: './initiative.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InitiativeComponent {
  public activatedRoute = inject(ActivatedRoute);
  public globalVars = inject(GlobalVariablesService);

  ngOnInit(): void {
    this.globalVars.currentInitiativeId.set(
      this.activatedRoute.snapshot.paramMap.get('initiativeId') ?? '',
    );
  }

  saveSection(): void {
    this.globalVars.isSavingSection.set(true);
  }
}
