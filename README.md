# Portfolio Website - Front End Developer

A modern, responsive portfolio website built with Angular showcasing 7 years of front-end development experience and projects focused on environmental sustainability.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive layout
- ⚡ Fast and optimized performance
- 🎯 Smooth scrolling navigation
- 💼 Professional portfolio sections:
  - Hero section with introduction
  - About section with experience highlights
  - Skills showcase with progress bars
  - Projects gallery (E-Waste, Plastic, Glass, Battery)
  - Contact form

## Projects Showcased

1. **E-Waste Management** - Comprehensive platform for electronic waste collection and recycling
2. **Plastic Recycling System** - Innovative web application for plastic waste management
3. **Glass Waste Tracker** - Smart tracking system for glass waste collection
4. **Battery Disposal Platform** - User-friendly platform for safe battery disposal

## Technologies Used

- Angular 17
- TypeScript
- HTML5 & CSS3
- Responsive Design
- Modern CSS (Grid, Flexbox, Animations)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:4200
```

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/        # Navigation and hero section
│   │   ├── about/         # About section
│   │   ├── experience/    # Experience timeline
│   │   ├── skills/        # Skills showcase
│   │   ├── projects/      # Projects gallery
│   │   └── contact/       # Contact form and footer
│   ├── app.component.*    # Main app component
│   └── app.module.ts      # App module
├── styles.css             # Global styles
└── index.html             # Main HTML file
```

## Customization

### Update Contact Information

Edit `src/app/components/contact/contact.component.ts`:
```typescript
contactInfo = {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, Country'
};
```

### Update Projects

Edit `src/app/components/projects/projects.component.ts` to modify project details.

### Update Skills

Edit `src/app/components/skills/skills.component.ts` to add or modify skills.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For any questions or suggestions, please feel free to reach out!
