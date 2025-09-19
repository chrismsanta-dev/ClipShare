import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router, protected authService: AuthService) {}

  protected onDashboardNavigate(): void {
    this.router.navigate(['dashboard']);
  }

  protected onLogoutLogin(): void {
    if (this.authService.getCurrentUser()) {
      try {
        this.authService.logoutUser();
      } catch (error: any) {
        console.error(error);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
}
