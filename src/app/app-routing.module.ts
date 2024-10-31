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
import { ProductListAdminComponent } from './admin/product-list-admin/product-list-admin.component';
import { ProductUpdateComponent } from './admin/product-update/product-update.component';

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
  //all products admin
  { path: 'admin/products', component: ProductListAdminComponent, canActivate: [AdminGuard] },
  { path: 'admin/product-update/:id', component: ProductUpdateComponent , canActivate: [AdminGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
