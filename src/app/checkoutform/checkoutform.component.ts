import { Component, OnInit } from '@angular/core';
import { ContactDetails, Order, ProductOrder } from '../models/Order';
import { CartService } from '../cart.service';
import { CartProduct } from '../models/cart-product';

@Component({
  selector: 'app-checkoutform',
  templateUrl: './checkoutform.component.html',
  styleUrls: ['./checkoutform.component.css'],
})
export class CheckoutformComponent implements OnInit {
  msg: string = 'gmail.com';
  contactDetails: ContactDetails = {
    name: '',
    phone: '',
    email: '',
    address: ''
  };
  products: ProductOrder[] = [];
  submitted = false;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    const cartProducts: CartProduct[] = this.cartService.getProducts();
    this.products = cartProducts.map(cp => ({
      productId: cp.product.id,
      quantity: cp.quantity
    }));
  }

  submit(form) {
    this.contactDetails.name = form.name;
    this.contactDetails.phone = form.phone;
    this.contactDetails.email = form.email;
    this.contactDetails.address = form.address;

    const order: Order = {
      products: this.products,
      contactDetails: this.contactDetails,
      shippingPrice: this.cartService.shippingPrice
    };

    window.alert('Order is successfully submitted by ' + this.contactDetails.name);
    this.submitted = true;

    console.log(order);
  }
}