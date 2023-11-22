import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  @ViewChild('mediaScroller') mediaScroller!: ElementRef;

  scrollLeft() {
    this.mediaScroller.nativeElement.scrollLeft -= 150; // Adjust the value as needed
  }

  scrollRight() {
    this.mediaScroller.nativeElement.scrollLeft += 150; // Adjust the value as needed
  }
}
