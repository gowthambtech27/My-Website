import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  languages = [
    { name: 'English', level: 'Professional', icon: '🇬🇧' },
    { name: 'Hindi', level: 'Basic - Learning', icon: '🇮🇳' },
    { name: 'Tamil', level: 'Native', icon: '🇮🇳' }
  ];
}

