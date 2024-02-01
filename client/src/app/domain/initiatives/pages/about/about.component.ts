import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  featuresData = [
    {
      title: 'Streamlined Review and Approval',
      description:
        'Experience a seamless review and approval workflow that accelerates decision-making, ensuring your initiatives move swiftly through the evaluation stages.',
    },
    {
      title: 'Real-time Progress Monitoring',
      description:
        'Keep a finger on the pulse of your initiatives. Our tool provides real-time updates, allowing you to monitor progress and track the impact of your research projects.',
    },
    {
      title: 'Portfolio Management',
      description:
        'Manage your initiatives in one place. Our tool provides a centralized view of your initiatives, giving you the ability to track and manage your portfolio of research projects.',
    },
    {
      title: 'Comprehensive Reporting',
      description:
        'Generate insightful reports on outcomes and outputs effortlessly. The tool empowers you to showcase the success and impact of your initiatives, facilitating transparent communication.',
    },
  ];
}
