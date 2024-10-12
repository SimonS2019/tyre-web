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
    console.log(product);
    
    const existingProduct = this.cartProduct.find(p => p.product._id === product._id);
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

  removeProductFromCart(id: string): void {
    this.cartProduct = this.cartProduct.filter(p => p.product._id !== id);
  }
}