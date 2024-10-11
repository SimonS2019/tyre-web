import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TyreDetails } from './TyreDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TyreService {
  //HttpClient
  configUrl = environment.configUrl;
  constructor(private http: HttpClient) {}

  getTireDetails(): Observable<TyreDetails[]> {
    return this.http.get<TyreDetails[]>(this.configUrl+'tiretypes');
    // return this.http.get<TyreDetails[]>(this.configUrl);
  }

  addTire() {}
}
