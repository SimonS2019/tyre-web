import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators'; // Import tap
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.configUrl;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http
      .post(`${this.baseUrl}auth/login`, { email, password })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/']); // Navigate to home page
        })
      );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}auth/register`, {
      username,
      email,
      password,
    });
  }
}
