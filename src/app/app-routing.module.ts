import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { TyreDashboardComponent } from './tyre-dashboard/tyre-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { MyAccountComponent } from './my-account/my-account.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: 'products/:productId', component: ProductShopComponent },
  { path: 'products', component: ProductDetailsComponent },
  { path: 'cart', component: CartItemsComponent, canActivate: [AuthGuard] },
  { path: '', component: LandingpageComponent },
  {
    path: 'checkout',
    component: CheckoutformComponent,
    canActivate: [AuthGuard],
  },
  { path: 'tireguide', component: TyreDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'my-account',
    component: MyAccountComponent,
    canActivate: [AuthGuard],
  },
  { path: 'add-product', component: AddProductComponent, canActivate: [AdminGuard] }, // Protect this route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
