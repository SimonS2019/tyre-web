import { Component, OnInit } from '@angular/core';
import { TyreService } from '../tyre.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/product';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';

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
    img: '',
    imgType: '',
    overview: '',
    specifications: '',
    performance_and_warranty: ''
  };
  imgFile: File | null = null;
  fileName: string;

  constructor(private tyreService: TyreService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  public onFileDrop(files: NgxFileDropEntry[]): void {
    console.log(files);
    
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.imgFile = file;
          this.fileName = file.name;
          this.product.imgType = file.type; // Set the MIME type
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
      formData.append('imgType', this.product.imgType);
      formData.append('overview', this.product.overview);
      formData.append('specifications', this.product.specifications);
      formData.append('performance_and_warranty', this.product.performance_and_warranty);

      this.tyreService.addProduct(formData).subscribe(
        response => {
          this.toastr.success('Product added successfully!');
        },
        error => {
          this.toastr.error('Failed to add product.');
        }
      );
    } else {
      this.toastr.error('Please upload an image.');
    }
  }

  addProduct(product: FormData): void {
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