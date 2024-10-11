import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TyreDetails } from './TyreDetails';
import { environment } from 'src/environments/environment';
import { Product } from 'src/product';
import { Order } from './order';

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

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.configUrl+'products/all');
  }

  // {{url}}/products/308
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.configUrl+'products/'+id);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.configUrl + 'orders');
  }
  // addTire() {}
}
