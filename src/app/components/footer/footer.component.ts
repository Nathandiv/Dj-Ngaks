import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  isPrivacyModalOpen = false;
  isTermsModalOpen = false;
  
  socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/djngaks', icon: 'instagram' },
    { name: 'Twitter', url: 'https://twitter.com/djngaks', icon: 'twitter' },
    { name: 'Facebook', url: 'https://facebook.com/djngaks', icon: 'facebook' },
    { name: 'TikTok', url: 'https://tiktok.com/@djngaks', icon: 'tiktok' },
    { name: 'YouTube', url: 'https://youtube.com/djngaks', icon: 'youtube' }
  ];

  openPrivacyModal() {
    this.isPrivacyModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closePrivacyModal() {
    this.isPrivacyModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  openTermsModal() {
    this.isTermsModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeTermsModal() {
    this.isTermsModalOpen = false;
    document.body.style.overflow = 'auto';
  }
}