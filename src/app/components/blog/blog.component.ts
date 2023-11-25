import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  expanded1 = false;
  expanded2 = false;
  expanded3 = false;

  toggle1() {
    this.expanded1 = !this.expanded1;
    this.expanded2 = false;
    this.expanded3 = false;

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
  toggle2() {
    this.expanded2 = !this.expanded2;
    this.expanded1 = false;
    this.expanded3 = false;

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
  toggle3() {
    this.expanded3 = !this.expanded3;
    this.expanded1 = false;
    this.expanded2 = false;

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
}
