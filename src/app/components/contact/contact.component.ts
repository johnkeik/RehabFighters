import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgForm, FormsModule } from '@angular/forms';
import { LoaderComponent } from '../loader/loader.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, LoaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  user_name: string = '';
  user_email: string = '';
  message: string = '';

  informativeMessage: string = '';
  messageType: string = '';
  emailLoading: boolean = false;

  onInputChange() {
    this.informativeMessage = '';
    this.messageType = '';
  }
  public sendEmail(e: Event, contactForm: NgForm) {
    this.informativeMessage = '';
    this.messageType = '';
    this.emailLoading = true;
    emailjs
      .sendForm(
        'service_ci76d1g',
        'template_zhtwxhy',
        e.target as HTMLFormElement,
        'Qg2y-7Eq6_F6KqH3N'
      )
      .then(
        () => {
          this.informativeMessage = 'Το μήνυμα στάλθηκε επιτυχώς!';
          this.messageType = 'success';
          contactForm.reset();
          this.emailLoading = false;
          console.log(this.informativeMessage);
        },
        (error) => {
          this.informativeMessage =
            'Υπήρξε κάποιο πρόβλημα. Παρακαλώ δοκιμάστε ξανά!';
          this.messageType = 'error';
          this.emailLoading = false;
        }
      );
  }
}
