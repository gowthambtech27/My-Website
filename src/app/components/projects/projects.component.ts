import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Waste Management',
      description: 'A comprehensive platform for managing electronic waste collection, tracking, and recycling. Features real-time monitoring, user dashboard, and reporting system.',
      technologies: ['Angular', 'TypeScript', 'REST API', 'Material Design'],
      icon: '♻️',
      color: '#4CAF50'
    },
    {
      title: 'Plastic Recycling System',
      description: 'Innovative web application for plastic waste management with categorization, collection scheduling, and recycling center locator. Includes analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      icon: '🔄',
      color: '#2196F3'
    },
    {
      title: 'Glass Waste Tracker',
      description: 'Smart tracking system for glass waste collection and processing. Features mobile-responsive design, GPS integration, and automated notifications.',
      technologies: ['Vue.js', 'Firebase', 'Google Maps API', 'PWA'],
      icon: '🍃',
      color: '#00BCD4'
    },
    {
      title: 'Battery Disposal Platform',
      description: 'User-friendly platform for safe battery disposal and recycling. Includes educational resources, collection point finder, and environmental impact calculator.',
      technologies: ['Angular', 'TypeScript', 'Leaflet Maps', 'Chart.js'],
      icon: '🔋',
      color: '#FF9800'
    }
  ];
}

