import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

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
success = false;

  async submitBooking(form: NgForm) {
    if (form.invalid) return;

    const formData = new FormData();
    formData.append('access_key', '18155a87-df5c-4465-b923-8cb64eb3e1b3');
    formData.append('subject', 'New Booking Request');
    formData.append('from_name', form.value.name);
    formData.append('from_email', form.value.email);

    // Append form values
    Object.entries(form.value).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      console.log('Booking form response:', result);

      if (result.success) {
        this.success = true;
        form.resetForm();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert(`❌ Booking failed: ${result.message}`);
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Network error. Please try again later.');
    }
  }
}