import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss',
})
export class ContactCardComponent {
  constructor(private router: Router) {}
  navigateToContactPage() {
    console.log('here');
    this.router.navigate(['/contact']);
  }
}
