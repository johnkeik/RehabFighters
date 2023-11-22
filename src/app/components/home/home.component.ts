import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { AboutInfoComponent } from './about-info/about-info.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ContactCardComponent,
    AboutInfoComponent,
    TestimonialsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
