import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavbarContentComponent,
  NavbarToggle,
} from './navbar-content/navbar-content.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavbarContentComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isNavbarVisible = false;
  get buttonImage(): string {
    return this.isNavbarVisible ? 'close.svg' : 'hamburger.svg';
  }
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  private lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (window.innerWidth >= 700) {
      if (currentScrollTop > this.lastScrollTop) {
        // Scrolling down
        this.isNavbarVisible = false;
      } else {
        // Scrolling up
        this.isNavbarVisible = true;
      }
    }

    this.lastScrollTop = currentScrollTop;
  }

  toggleNavbar() {
    this.onToggleNavbar({ isNavbarVisible: !this.isNavbarVisible });
  }
  onToggleNavbar(data: NavbarToggle): void {
    this.isNavbarVisible = data.isNavbarVisible;
    if (window.innerWidth <= 700) {
      this.renderer.setStyle(
        document.body,
        'overflow',
        this.isNavbarVisible ? 'hidden' : ''
      );
    }
  }
}
