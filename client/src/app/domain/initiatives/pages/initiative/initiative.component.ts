import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GlobalVariablesService } from '../../../shared/services/global-variables.service';

@Component({
  selector: 'app-initiative',
  standalone: true,
  imports: [RouterModule, SidebarComponent],
  templateUrl: './initiative.component.html',
  styleUrl: './initiative.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InitiativeComponent {
  private activatedRoute = inject(ActivatedRoute);
  private globalVars = inject(GlobalVariablesService);

  ngOnInit(): void {
    this.globalVars.currentInitiativeId.set(
      this.activatedRoute.snapshot.paramMap.get('initiativeId') ?? '',
    );
  }
}
