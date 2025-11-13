import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  currentYear = new Date().getFullYear();
  
  contactInfo = {
    email: 'gowthampalanichamyy@gmail.com',
    phone: '+918660464527',
    location: 'Bangalore, Karnataka, India',
    linkedin: 'www.linkedin.com/in/gowtham-palanichamy'
  };

  onSubmit() {
    // Handle form submission
    alert('Thank you for your message! I will get back to you soon.');
  }
}

