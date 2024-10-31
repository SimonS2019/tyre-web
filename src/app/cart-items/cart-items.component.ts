import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartProduct } from '../models/cart-product';
import { mockcart } from './mockcartdata';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent implements OnInit {
  products: CartProduct[] = [];
  sum: number = 0;
  totalPrice: number = 0;

 
  
  constructor(public cart: CartService) {}

  ngOnInit(): void {
    this.products = this.cart.getProducts();
    // this.products = mockcart;
    console.log(this.products);
    
    this.updateSum();
  }

  onQuantityChange() {
    this.updateSum();
  }

  updateSum() {
    this.sum = this.products.reduce(
      (acc, product) => acc + product.product.price * product.quantity,
      0
    );
    this.totalPrice = this.sum + this.cart.shippingPrice;
  }

  deleteProduct(product: CartProduct) {
    this.cart.removeProductFromCart(product.product._id);
    this.products = this.cart.getProducts();
    this.updateSum();
  }
}
