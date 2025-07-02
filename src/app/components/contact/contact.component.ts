import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  isSubmitting = false;
  showSuccessMessage = false;

  formData = {
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    location: '',
    message: ''
  };

  socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/mpho_ngakz/?igsh=MWpyYXczZmlhcmppdw%3D%3D#', icon: 'instagram' },
    // { name: 'Twitter', url: 'https://twitter.com/djngaks', icon: 'twitter' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@mpho_ngaks/video/7476084071148391687', icon: 'tiktok' },
    { name: 'YouTube', url: 'https://www.youtube.com/results?search_query=busisa+dj+ngakz', icon: 'youtube' }
  ];

  onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccessMessage = true;
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        location: '',
        message: ''
      };
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    }, 2000);
  }
}