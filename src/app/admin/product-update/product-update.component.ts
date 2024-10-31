import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { Product } from 'src/app/models/product';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  productId: string;
  product: Product = {
    name: '',
    price: 0,
    quantity: 0,
    description: '',
    img: '',
  };
  imgFile: File | null = null;
  fileName: string;

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    public adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.loadProduct();
  }

  loadProduct(): void {
    this.adminService.getProductById(this.productId).subscribe(
      (product: Product) => {
        this.product = product;
      },
      (error) => {
        this.toastr.error('Failed to load product.');
      }
    );
  }

  public onFileDrop(files: NgxFileDropEntry[]): void {
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.imgFile = file;
          this.fileName = file.name;
        });
      }
    }
  }

  onSubmit(): void {
    if (this.imgFile) {
      const formData = new FormData();
      formData.append('name', this.product.name);
      formData.append('price', this.product.price.toString());
      formData.append('quantity', this.product.quantity.toString());
      formData.append('description', this.product.description);
      formData.append('img', this.imgFile);

      this.adminService.updateProduct(this.productId, formData).subscribe(
        (response) => {
          this.toastr.success('Product updated successfully!');
        },
        (error) => {
          this.toastr.error('Failed to update product.');
        }
      );
    } else {
      this.toastr.error('Please upload an image.');
    }
  }
}
