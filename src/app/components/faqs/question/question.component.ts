import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  @Input() title: string;
  showDescription = false;

  get buttonImage(): string {
    return this.showDescription ? 'minus.svg' : 'plus.svg';
  }
  toggleDescription() {
    console.log('coming here');
    this.showDescription = !this.showDescription;
  }
}
