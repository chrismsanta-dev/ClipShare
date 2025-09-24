import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  constructor(private authService: AuthService, private router: Router) {}

  protected async onRegister(): Promise<void> {
    const email = this.form().nativeElement['email'].value;
    const username = this.form().nativeElement['username'].value;

    const password = this.form().nativeElement['password'].value;
    const confirmPassword = this.form().nativeElement['confirmPassword'].value;
    const passwordStatus = this.checkPassword(password, confirmPassword);
    // TODO: handle password match error here
    if (!passwordStatus) return;

    try {
      await this.authService.registerUser(email, username, password);
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error(error);
    }
  }

  private checkPassword(password: string, confirmPassword: string): boolean {
    if (!password || !confirmPassword) return false;
    if (password !== confirmPassword) return false;
    return true;
  }
}
