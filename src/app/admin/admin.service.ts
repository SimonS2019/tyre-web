import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TyreDetails } from '../models/TyreDetails';
import { Product } from '../models/product';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  configUrl = environment.configUrl;
  constructor(private http: HttpClient) {}

  getTireDetails(): Observable<TyreDetails[]> {
    return this.http.get<TyreDetails[]>(this.configUrl + 'tiretypes');
    // return this.http.get<TyreDetails[]>(this.configUrl);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.configUrl + 'products/all');
  }

  // {{url}}/products/308
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.configUrl + 'products/' + id);
  }

}
