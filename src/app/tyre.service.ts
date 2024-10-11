import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TyreDetails } from './TyreDetails';

@Injectable({
  providedIn: 'root',
})
export class TyreService {
  //HttpClient
  configUrl = 'http://localhost:3000/tyres';
  constructor(private http: HttpClient) {}

  getTireDetails(): Observable<TyreDetails[]> {
    return this.http.get<TyreDetails[]>(this.configUrl);
  }

  addTire() {}
}
