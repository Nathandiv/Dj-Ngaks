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
    { name: 'Instagram', url: 'https://www.instagram.com/mpho_ngakz/?igsh=MWpyYXczZmlhcmppdw%3D%3D#', icon: 'instagram' },
    { name: 'Twitter', url: 'https://twitter.com/djngaks', icon: 'twitter' },
    { name: 'Facebook', url: 'https://facebook.com/djngaks', icon: 'facebook' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@mpho_ngaks/video/7476084071148391687', icon: 'tiktok' },
    { name: 'YouTube', url: 'https://www.youtube.com/watch?v=UeQ25tH5k84&list=RDUeQ25tH5k84&start_radio=1', icon: 'youtube' }
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