import { Component } from '@angular/core';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent {
  softSkills = [
    'Presentation',
    'Planning',
    'Organized',
    'Creative Problem-Solving',
    'Teamwork',
    'Active Listening',
    'Adaptability',
    'Analytical Thinking'
  ];
}

