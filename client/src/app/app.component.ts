import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
  constructor() {
    console.warn(
      `%c Environment:%c${environment.envName.charAt(0).toUpperCase()}${environment.envName.slice(1)} `,
      'background: #ffffff; color: #212121; font-size: 16px; padding: 5px; font-weight: bold',
      'background: #ffffff; color: #326fd1; font-size: 16px; padding: 5px; font-weight: bold',
    );
  }
}
