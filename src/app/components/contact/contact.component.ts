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
    { name: 'Instagram', url: 'https://instagram.com/djngaks', icon: 'instagram' },
    { name: 'Twitter', url: 'https://twitter.com/djngaks', icon: 'twitter' },
    { name: 'TikTok', url: 'https://tiktok.com/@djngaks', icon: 'tiktok' },
    { name: 'YouTube', url: 'https://youtube.com/djngaks', icon: 'youtube' }
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