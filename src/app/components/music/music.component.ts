import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Track {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  cover: string;
  audioUrl: string;
  featured: boolean;
}

interface Video {
  id: number;
  title: string;
  description: string;
  type: string;
  duration: string;
  embedUrl: SafeResourceUrl;
}

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  
  public currentlyPlaying: Track | null = null;
  private currentPlayPromise: Promise<void> | null = null;

  tracks: Track[] = [
    {
      id: 1,
      title: 'Busisa',
      artist: 'DJ Ngaksfeat. Soulful G',
      genre: 'Amapiono',
      duration: '4:32',
      cover: 'https://i.pinimg.com/736x/28/b2/2d/28b22d55f559db540b64abf57afd7aa2.jpg',
      audioUrl: '',
      featured: true
    }
    // {
    //   id: 2,
    //   title: 'Electric Dreams',
    //   artist: 'DJ Ngaks ft. Stellar',
    //   genre: 'Melodic Techno',
    //   duration: '5:18',
    //   cover: 'https://i.pinimg.com/736x/28/b2/2d/28b22d55f559db540b64abf57afd7aa2.jpg',
    //   audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-04.wav',
    //   featured: true
    // },
    // {
    //   id: 3,
    //   title: 'Midnight Pulse',
    //   artist: 'DJ Ngaks',
    //   genre: 'Deep House',
    //   duration: '3:45',
    //   cover: 'https://i.pinimg.com/736x/28/b2/2d/28b22d55f559db540b64abf57afd7aa2.jpg',
    //   audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-03.wav',
    //   featured: true
    // }
  ];

  platforms = [
    { name: 'Spotify', url: 'https://open.spotify.com/track/0KV6JKvDvwMfB5OgzOaFPc?si=61cc30fe32a34c94', icon: 'spotify' },
    { name: 'Apple Music', url: 'https://music.apple.com/za/artist/dj-ngakz/1817381595', icon: 'apple' },
    { name: 'YouTube Music', url: 'https://music.youtube.com/watch?v=UeQ25tH5k84', icon: 'youtube' }
  ];

  videos: Video[] = [
    {
      id: 1,
      title: 'encanews | [LIVE PERFORMANCE] 14-year-old DJ Ngaks',
      description: 'Watch the powerful live performance of 14-year-old DJ Ngaks that wowed the crowd and showcased her rising talent on the big stage.',
      type: 'Live Performance',
      duration: '2:36',
embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/ePojfM9cUeE')
    },
    {
      id: 2,
      title: 'Youth Month: DJ Ngaks Shares Her Journey',
      description: 'A powerful Youth Month feature where DJ Ngaks opens up about her path, challenges, and dreams.',
      type: 'Feature Story',
      duration: '5:32',
embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/vZrTO3Z8c0s')
    },
      {
      id: 3,
       title: 'DJ Ngaks: Taking South Africa by Storm',
      description: 'SABC News interviews 14-year-old DJ Ngaks, the rising sensation redefining the local music scene.',
      type: 'Interview',
      duration: '6:54',
embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/haHWdjCUG0Q')
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  get featuredTracks() {
    return this.tracks.filter(track => track.featured);
  }

  public async playTrack(track: Track) {
    const audio = this.audioPlayer.nativeElement;
    
    // Wait for any existing play promise to resolve before proceeding
    if (this.currentPlayPromise) {
      try {
        await this.currentPlayPromise;
      } catch (error) {
        // Ignore errors from previous play attempts
      }
    }
    
    if (this.currentlyPlaying?.id === track.id) {
      // If same track is playing, check if it's actually playing or paused
      if (!audio.paused) {
        this.pauseTrack();
      } else {
        // Resume playback
        try {
          this.currentPlayPromise = audio.play();
          await this.currentPlayPromise;
        } catch (error) {
          console.error('Error resuming audio:', error);
          this.currentlyPlaying = null;
        } finally {
          this.currentPlayPromise = null;
        }
      }
    } else {
      // Play new track - ensure clean state
      audio.pause();
      audio.src = track.audioUrl;
      audio.load(); // Reset the audio element to a clean state
      
      try {
        this.currentPlayPromise = audio.play();
        await this.currentPlayPromise;
        this.currentlyPlaying = track;
      } catch (error) {
        console.error('Error playing audio:', error);
        // Fallback: just show visual feedback without actual audio
        this.currentlyPlaying = track;
        setTimeout(() => {
          this.currentlyPlaying = null;
        }, 3000);
      } finally {
        this.currentPlayPromise = null;
      }
    }
  }

  pauseTrack() {
    if (this.audioPlayer) {
      this.audioPlayer.nativeElement.pause();
    }
    this.currentlyPlaying = null;
  }

  onTrackEnded() {
    this.currentlyPlaying = null;
  }

  onTrackLoading() {
    // Track is loading
  }

  onTrackReady() {
    // Track is ready to play
  }
}