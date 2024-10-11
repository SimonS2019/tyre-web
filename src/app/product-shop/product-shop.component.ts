import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { products } from 'src/data/products';// Do not use this, we are using API
import { Product } from 'src/app/models/product';
import { CartService } from '../cart.service';
import { TyreService } from '../tyre.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css'],
})
export class ProductShopComponent implements OnInit {
  product: Product;
  quantity: number = 1;
  disabledButton: boolean = false;
  submitted = false;
  text: string = 'Add to Cart';

  constructor(
    private tyreService: TyreService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private cart: CartService
  ) {}
  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId');
    this.tyreService.getProductById(+productId).subscribe(
      (data: Product) => {
        // console.log(data);
        this.product = data;
      },
      (error) => {
        this.toastr.error('Failed to load product', 'Error');
      }
    );
  }

  addToCart() {
    this.disabledButton = true;
    this.text = 'Added to Cart';
    this.submitted = true;
    this.cart.addProductstoCart(this.product, this.quantity);
  }
}
