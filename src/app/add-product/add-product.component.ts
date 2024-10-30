import { Component, OnInit } from '@angular/core';
import { TyreService } from '../tyre.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = {
    name: '',
    price: 0,
    quantity: 0,
    description: '',
    img: ''
  };

  constructor(private tyreService: TyreService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.addProduct(this.product);
  }

  addProduct(product: Product): void {
    this.tyreService.addProduct(product).subscribe(
      response => {
        this.toastr.success('Product added successfully!');
      },
      error => {
        this.toastr.error('Failed to add product.');
      }
    );
  }
}