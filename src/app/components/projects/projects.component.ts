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
      color: '#ffff'
    },
    {
      title: 'Plastic Recycling System',
      description: 'Comprehensive platform for managing plastic waste, featuring automated material categorization, collection scheduling, and an integrated map to locate nearby recycling centers. Includes a data-driven analytics dashboard for monitoring recycling trends.',
      technologies: ['Angular', 'Node.js', 'HighCharts', 'Chart.js'],
      icon: '🔄',
      color: '#fff'
    },
    {
      title: 'Glass Waste Tracker',
      description: 'Smart tracking system for glass waste collection and processing. Features mobile-responsive design, GPS integration, and automated notifications.',
      technologies: ['Angular', 'TypeScript', 'REST API', 'Material Design'],
      icon: '🍃',
      color: '#ffff'
    },
    {
      title: 'Battery Disposal Platform',
      description: 'User-friendly platform for safe battery disposal and recycling. Includes educational resources, collection point finder, and environmental impact calculator.',
      technologies: ['Angular', 'TypeScript', 'Leaflet Maps', 'Chart.js'],
      icon: '🔋',
      color: '#ffff'
    }
  ];
}

