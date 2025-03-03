import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string;
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  onSubmit() {
    this.authService
      .register(this.username, this.email, this.password)
      .subscribe(
        (response) => {
          console.log('Registration successful', response);
          this.toastr.success('Registration successful!', '', {
            timeOut: 3000, // 3 seconds
          });
          this.autoLogin();
        },
        (error) => {
          console.error('Registration failed', error);
          this.toastr.error('Registration failed. Please try again.', '', {
            timeOut: 3000, // 3 seconds
          });
        }
      );
  }

  autoLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (loginResponse) => {
        console.log('Login successful', loginResponse);
        this.toastr.success('Login successful!', '', {
          timeOut: 3000, // 3 seconds
        });
      },
      (loginError) => {
        console.error('Login failed', loginError);
        this.toastr.error('Login failed. Please try logging in manually.', '', {
          timeOut: 3000, // 3 seconds
        });
      }
    );
  }
}
