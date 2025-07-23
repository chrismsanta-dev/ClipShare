import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  constructor(private authService: AuthService) {}

  protected onLogin(): void {
    const email = this.form().nativeElement['email'].value;
    const password = this.form().nativeElement['password'].value;

    this.authService.loginUser(email);
  }
}
