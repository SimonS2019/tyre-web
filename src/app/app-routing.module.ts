import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { TyreDashboardComponent } from './tyre-dashboard/tyre-dashboard.component';

const routes: Routes =
 [ {path: 'products/:productId', component: ProductShopComponent },
 {path: 'products', component: ProductDetailsComponent },
 {path: 'cart', component: CartItemsComponent },
 {path: '', component: LandingpageComponent },
 {path: 'checkout', component: CheckoutformComponent },
 {path: 'tireguide', component: TyreDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
