import { Component, EventEmitter, HostListener, Output } from '@angular/core';
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

  private touchStartX: number;

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
    event.preventDefault();
  }

  onTouchEnd(event: TouchEvent): void {
    const touchEndX = event.changedTouches[0].clientX;
    const touchThreshold = 10; // Adjust this threshold as needed

    if (Math.abs(touchEndX - this.touchStartX) < touchThreshold) {
      // It's a tap, trigger the desired action
      this.toggleNavbar();
    }
  }
  toggleNavbar() {
    this.onToggleNavbar({ isNavbarVisible: !this.isNavbarVisible });
  }
  onToggleNavbar(data: NavbarToggle): void {
    this.isNavbarVisible = data.isNavbarVisible;
  }
}
