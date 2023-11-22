import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppModule } from './app.module';
import { NavbarComponent } from './core/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavbarComponent,
    FooterComponent,
    TranslateModule,
    AppModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Rehab Fighters';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('gr');
    translate.use('gr');
  }
}
