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
    { label: 'Years Experience', value: '8+' },
    { label: 'Countries Toured', value: '25+' },
    { label: 'Tracks Released', value: '150+' },
    { label: 'Followers', value: '2M+' }
  ];

  achievements = [
    'Featured at Ultra Music Festival',
    'Resident DJ at Ibiza\'s top clubs',
    'Collaborated with Grammy-winning artists',
    'Headlined major EDM festivals worldwide'
  ];
}