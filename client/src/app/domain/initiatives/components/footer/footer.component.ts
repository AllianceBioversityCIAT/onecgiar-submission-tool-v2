import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footerLinks = [
    {
      label: 'Terms and Conditions',
      link: 'https://www.notion.so/Legal-Terms-eb2f3e436f3e46bd9057b1cb1e3391b8',
    },
    {
      label: 'License',
      link: 'https://github.com/AllianceBioversityCIAT/onecgiar-submission-tool/blob/main/LICENSE',
    },
  ];
}
