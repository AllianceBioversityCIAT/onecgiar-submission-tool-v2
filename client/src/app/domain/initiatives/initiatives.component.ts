import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-initiatives',
  standalone: true,
  imports: [RouterModule],
  template: `<div>hello</div>`,
  styles: `
  div{
    color: red;
  }
  `,
})
export class InitiativesComponent {}
