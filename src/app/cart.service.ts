import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartProduct } from './models/cart-product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: CartProduct[] = [];

  constructor() { }

  addProductstoCart(product: Product, quantity: number = 1): void {
    const existingProduct = this.products.find(p => p.product.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.products.push({ product, quantity });
    }
  }

  getProducts(): CartProduct[] {
    return this.products;
  }

  clearCart(): void {
    this.products = [];
  }
}