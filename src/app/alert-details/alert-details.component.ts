import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css']
})
export class AlertDetailsComponent implements OnInit {
@Input() product : Product;
@Input() isUnchanged;
@Output() notify =new EventEmitter<Product>();




  constructor() { }

  ngOnInit(): void {
  }

  clickChildMe()
  {
    this.notify.emit(this.product);
  }

}
