import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experience = {
    years: 6,
    company: 'Karo Sambhav Private Limited',
    location: 'Bangalore, KA',
    position: 'Software Engineer',
    period: 'Oct 2018 – Present',
    description: 'Front-End Developer with 6+ years of experience in designing, developing, and deploying scalable, high-performance web applications.',
    achievements: [
      'Developed and maintained scalable web applications using Angular, TypeScript, JavaScript, HTML, CSS, and Bootstrap',
      'Utilized Postman for comprehensive API testing to ensure reliability, security, and performance',
      'Conducted thorough manual and automated testing to identify and resolve bugs',
      'Designed and implemented daily mailers and detailed HTML-based reports',
      'Successfully managed and delivered 4 concurrent projects',
      'Utilized version control systems like Git, GitHub, and Bitbucket',
      'Ensured web applications were fully responsive and compatible across different browsers and devices'
    ]
  };
}

