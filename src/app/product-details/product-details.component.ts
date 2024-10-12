import { Component, OnInit } from '@angular/core';
// import { products } from 'src/data/products'; // This is use mock data, now we are using API
import { Product } from 'src/app/models/product';
import { TyreService } from '../tyre.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  title: string = 'Rahul Shetty Academy';
  products: Product[] = [];
  isUnchanged = true;

  constructor(
    private tyreService: TyreService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.tyreService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        this.toastr.error('Failed to load products', 'Error');
      }
    );
  }

  clickMe(product: Product) {
    window.alert(
      product.name +
        ' fit your car and are available in your location to purchase'
    );
  }

  enableBuying() {
    this.isUnchanged = !this.isUnchanged;
  }

  
}
