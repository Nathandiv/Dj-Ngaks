import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface TourEvent {
  date: string;
  venue: string;
  city: string;
  country: string;
  ticketUrl: string;
  soldOut: boolean;
  featured: boolean;
  image?: string;
  comingSoon?: boolean;
}

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.css'
})
export class TourComponent {
  upcomingEvents: TourEvent[] = [
    {
      date: '2024-01-15',
      venue: 'Shimmy Beach Club',
      city: 'Cape Town',
      country: 'South Africa',
      ticketUrl: 'https://example.com/tickets/1',
      soldOut: false,
      featured: true,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      comingSoon: false
    },
    {
      date: '2024-01-28',
      venue: 'The Waiting Room',
      city: 'Johannesburg',
      country: 'South Africa',
      ticketUrl: 'https://example.com/tickets/2',
      soldOut: true,
      featured: true,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      comingSoon: false
    },
    {
      date: '2025-02-10',
      venue: 'Rocking the Daisies Festival',
      city: 'Darling',
      country: 'South Africa',
      ticketUrl: 'https://example.com/tickets/3',
      soldOut: true,
      featured: false,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      comingSoon: false
    },
    {
      date: '2025-02-22',
      venue: 'Truth Nightclub',
      city: 'Cape Town',
      country: 'South Africa',
      ticketUrl: 'https://example.com/tickets/4',
      soldOut: false,
      featured: false,
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      comingSoon: false
    },
    {
      date: '2025-03-05',
      venue: 'Kitcheners Carvery Bar',
      city: 'Johannesburg',
      country: 'South Africa',
      ticketUrl: 'https://example.com/tickets/5',
      soldOut: false,
      featured: false,
      image: 'https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      comingSoon: false
    },
    {
      date: '2025-03-18',
      venue: 'AfrikaBurn Festival',
      city: 'Tankwa Karoo',
      country: 'South Africa',
      ticketUrl: 'https://example.com/tickets/6',
      soldOut: false,
      featured: true,
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      comingSoon: false
    },
    {
      date: '2025-04-02',
      venue: 'Oppikoppi Festival',
      city: 'Limpopo',
      country: 'South Africa',
      ticketUrl: 'https://example.com/tickets/7',
      soldOut: false,
      featured: false,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      comingSoon: false
    },
    {
      date: '2025-04-15',
      venue: 'The Assembly',
      city: 'Cape Town',
      country: 'South Africa',
      ticketUrl: 'https://example.com/tickets/8',
      soldOut: false,
      featured: false,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      comingSoon: false
    }
  ];

  openTicketUrl(url: string): void {
    window.open(url, '_blank');
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  getShortDate(dateString: string): { day: string, month: string } {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
    };
  }

  isEventPassed(dateString: string): boolean {
    const eventDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return eventDate < today;
  }

  get featuredEvents() {
    return this.upcomingEvents.filter(event => event.featured);
  }

  get regularEvents() {
    return this.upcomingEvents.filter(event => !event.featured);
  }
 success = false;

  async submitSubscribe(form: NgForm) {
    if (form.invalid) return;

    const formData = new FormData();
    formData.append('access_key', '18155a87-df5c-4465-b923-8cb64eb3e1b3');
    formData.append('subject', 'New Subscriber');
    formData.append('from_name', 'Website Newsletter');
    formData.append('email', form.value.email);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      console.log('Subscribe response:', result);

      if (result.success) {
        this.success = true;
        form.resetForm();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert(`Failed to subscribe: ${result.message}`);
      }
    } catch (error) {
      console.error('Subscribe error:', error);
      alert('Network error. Please try again.');
    }
  }
 
}