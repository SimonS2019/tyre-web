import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TyreDetails } from './models/TyreDetails';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/models/product';
import { Order } from './models/Order';

@Injectable({
  providedIn: 'root',
})
export class TyreService {
  //HttpClient
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

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.configUrl + 'orders');
  }

  submitOrder(order: Order): Observable<Order> {  
    return this.http.post<Order>(this.configUrl + 'orders', order);
  }

  addProduct(product: FormData): Observable<any> {
    return this.http.post<FormData>(this.configUrl + 'products/addone', product);
  }
}
