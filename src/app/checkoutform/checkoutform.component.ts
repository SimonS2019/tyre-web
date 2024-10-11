import { Component, OnInit } from '@angular/core';
import { ContactDetails, Order, ProductOrder } from '../models/Order';
import { CartService } from '../cart.service';
import { CartProduct } from '../models/cart-product';
import { TyreService } from '../tyre.service';
import { ToastrService } from 'ngx-toastr';

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
    address: '',
  };
  products: ProductOrder[] = [];
  submitted = false;

  constructor(
    private cartService: CartService,
    private tyreService: TyreService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const cartProducts: CartProduct[] = this.cartService.getProducts();
    this.products = cartProducts.map((cp) => ({
      productId: cp.product._id,
      quantity: cp.quantity,
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
      shippingPrice: this.cartService.shippingPrice,
    };

    this.tyreService.submitOrder(order).subscribe(
      (response) => {
        console.log('Order submitted successfully:', response);
        this.toastr.success('Order submitted successfully', 'Success');
        this.submitted = true;
      },
      (error) => {
        console.error('Error submitting order:', error);
        this.toastr.error('Error submitting order', 'Error');
      }
    );
  }
}
