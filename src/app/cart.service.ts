import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartProduct } from './models/cart-product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProduct: CartProduct[] = [];
  shippingPrice: number = 20;

  constructor() { }

  addProductstoCart(product: Product, quantity: number = 1): void {
    const existingProduct = this.cartProduct.find(p => p.product.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.cartProduct.push({ product, quantity });
    }
    console.log(this.cartProduct);
    
  }

  getProducts(): CartProduct[] {
    return this.cartProduct;
  }

  clearCart(): void {
    this.cartProduct = [];
  }

  removeProductFromCart(id: number): void {
    this.cartProduct = this.cartProduct.filter(p => p.product.id !== id);
  }
}