import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/data/products';
import { Product } from 'src/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent implements OnInit {
product:Product;
submitted = false;
text : string = "Add to Cart";
disabledButton = false;
  constructor(private route :ActivatedRoute,private cart:CartService) { }

  ngOnInit(): void {

//code to retrieve product
//ActivatedRoute
//service can be injected into component class by calling its object 
//in constructor  - (Dependency Injection)
    const routeParams =this.route.snapshot.paramMap;
   const id = Number(routeParams.get("productId"));
  this.product= products.find(product=> product.id ===id);



  }

  addToCart()
  {
    this.disabledButton = true;
    this.text = "Added to Cart";
    //service
    this.submitted = true;
    this.cart.addProductstoCart(this.product);


  }

}
