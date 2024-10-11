import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartProduct } from '../models/cart-product';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent implements OnInit {
  products: CartProduct[] = [];
  sum: number = 0;
  shippingPrice: number = 10;
  totalPrice: number = 0;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.products = this.cart.getProducts();
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
    this.totalPrice = this.sum + this.shippingPrice;
  }

  deleteProduct(product: CartProduct) {
    this.cart.removeProductFromCart(product.product.id);
    this.products = this.cart.getProducts();
    this.updateSum();
  }
}
