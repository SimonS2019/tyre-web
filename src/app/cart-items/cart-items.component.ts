import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

   products = this.cart.getProducts();
   sum :number;
   newPrice :number;
   shippingPrice = 8;
   totalPrice :number;
  

  constructor(private cart : CartService) { }

  ngOnInit(): void {

    this.updateSum();

  }

  updateSum()
  {
    this.sum = 0;
    for(let i=0;  i<this.products.length;i++)
    {
     this.sum = this.sum +this.products[i].price;
    }
    
    this.totalPrice = this.sum + this.shippingPrice;


  }


    onKey(product,value)
    {
        //product.price = original price
        //value * product.price = new price
        //sum -original price +new price
        this.newPrice = value * product.price;
        this.sum = this.sum - product.price + this.newPrice;
        this.totalPrice = this.sum + this.shippingPrice;

    }


    

  deleteProduct(product)
  {
    let arr=this.products;
  
    console.log(this.products);
    const index =this.products.indexOf(product);
    arr.splice(index,1);
    console.log(arr);
    console.log(this.products);
    this.products = arr;
    this.updateSum();

  }


}

