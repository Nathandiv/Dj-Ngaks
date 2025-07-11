import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Provinces Toured', value: '7+' },
    { label: 'Tracks Released', value: '8+' },
    { label: 'Followers', value: '1M+' }
  ];

  achievements = [
    'Visionary brand-builder, not just DJing',
    'Winner of the Jack Skelly Trophy for Loyalty and Honesty',
    'Collaborated with local talents including Soulful G and Tshego AMG',
    'Inspires a nationwide youth movement'

  ];
}