import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface NavbarToggle {
  isNavbarVisible: boolean;
}
@Component({
  selector: 'app-navbar-content',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar-content.component.html',
  styleUrl: './navbar-content.component.scss',
})
export class NavbarContentComponent {
  @Output() onToggleNavbar: EventEmitter<NavbarToggle> = new EventEmitter();
  isNavbarVisible = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateNavbarVisibility();
  }
  ngOnInit(): void {
    // Initialize the navbar visibility on component initialization
    this.updateNavbarVisibility();
  }

  private updateNavbarVisibility(): void {
    // Set isNavbarVisible to true when the screen width is greater than 640px
    this.isNavbarVisible = window.innerWidth > 700;
    this.onToggleNavbar.emit({ isNavbarVisible: this.isNavbarVisible });
  }

  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
    this.onToggleNavbar.emit({ isNavbarVisible: this.isNavbarVisible });
  }

  closeNavbar() {
    if (window.innerWidth < 700) {
      this.isNavbarVisible = false;
      this.onToggleNavbar.emit({ isNavbarVisible: this.isNavbarVisible });
    }
  }
}
