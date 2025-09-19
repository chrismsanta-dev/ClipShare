import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  constructor(private authService: AuthService, private router: Router) {}

  protected async onLogin(): Promise<void> {
    const email = this.form().nativeElement['email'].value;
    const password = this.form().nativeElement['password'].value;

    try {
      await this.authService.loginUser(email, password);
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error(error);
    }
  }
}
