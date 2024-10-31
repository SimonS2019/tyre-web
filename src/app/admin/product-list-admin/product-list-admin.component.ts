import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list-admin',
  templateUrl: './product-list-admin.component.html',
  styleUrls: ['./product-list-admin.component.css']
})
export class ProductListAdminComponent implements OnInit {
  products: Product[] = [];

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.adminService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Failed to load products', error);
      }
    );
  }

  updateProduct(productId: string): void {
    this.router.navigate(['/product-update', productId]);
  }

  deleteProduct(productId: string): void {
    this.adminService.deleteProduct(productId).subscribe(
      () => {
        this.products = this.products.filter(product => product._id !== productId);
      },
      (error) => {
        console.error('Failed to delete product', error);
      }
    );
  }
}
