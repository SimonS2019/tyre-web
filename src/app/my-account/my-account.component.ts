import { Component, OnInit } from '@angular/core';
import { TyreService } from '../tyre.service';
import { Order } from '../models/Order';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  orders: Order[] = [];

  constructor(private tyreService: TyreService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.tyreService.getOrders().subscribe(
      (data: Order[]) => {
        this.orders = data;
        this.toastr.success('Orders loaded successfully!');
      },
      (error) => {
        console.error('Error fetching orders', error);
        this.toastr.error('Failed to load orders.');
      }
    );
  }
}