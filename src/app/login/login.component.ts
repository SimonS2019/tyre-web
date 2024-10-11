import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.toastr.success('Login successful!', '', {
          timeOut: 3000, // 3 seconds
        });
      },
      (error) => {
        console.error('Login failed', error);
        this.toastr.error('Login failed. Please check your credentials.', '', {
          timeOut: 3000, // 3 seconds
        });
      }
    );
  }
}
