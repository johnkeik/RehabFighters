import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule, QuestionComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FaqsComponent {
  isExpanded = false;

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }
}
