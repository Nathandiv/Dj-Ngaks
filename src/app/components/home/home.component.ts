import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  currentSlide = 0;
  
  carouselImages = [
    'https://i.pinimg.com/736x/7e/fe/3b/7efe3bb969a6a84d93f8363ed5a19ba0.jpg',
    'https://i.pinimg.com/736x/7a/b5/23/7ab5239ab90c8e05116156a568426873.jpg',
    'https://i.pinimg.com/736x/cb/c6/0e/cbc60e61d527662a916e97efcd54739d.jpg'
  ];

  ngOnInit() {
    this.autoSlide();
  }

  autoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.carouselImages.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}