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
    // this.router.navigate(['/product-update', productId]);
    console.log('Update product with id: ', productId);
    
  }

  deleteProduct(productId: string): void {
    console.log('Delete product with id: ', productId);
    
    // this.adminService.deleteProduct(productId).subscribe(
    //   () => {
    //     this.products = this.products.filter(product => product.id !== productId);
    //   },
    //   (error) => {
    //     console.error('Failed to delete product', error);
    //   }
    // );
  }
}
