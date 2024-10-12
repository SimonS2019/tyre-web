import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CheckoutformComponent } from './checkoutform/checkoutform.component';
import { FormsModule } from '@angular/forms';
import { TyreDashboardComponent } from './tyre-dashboard/tyre-dashboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthInterceptor } from './auth.interceptor';
import { MyAccountComponent } from './my-account/my-account.component';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    AlertDetailsComponent,
    ProductShopComponent,
    LandingpageComponent,
    CartItemsComponent,
    CheckoutformComponent,
    LandingpageComponent,
    TyreDashboardComponent,
    LoginComponent,
    RegisterComponent,
    MyAccountComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
