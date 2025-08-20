import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegisterService } from 'src/service/register.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FootComponent } from './foot/foot.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { TrendingRestaurantsComponent } from './trending-restaurants/trending-restaurants.component';
import {CardModule} from 'primeng/card';


import { RestaurantRegistrationComponent } from './restaurant-registration/restaurant-registration.component';

import { RestaurantRegistrationService } from './restaurant-registration/restaurant-registration.service';
import { MenuComponent } from './menu/menu.component';


import { AddDishComponent } from './menu/add-dish/add-dish.component';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AuthService } from './core/auth.service';
import { LoginGuard } from './login/login-guard.service';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/materials/material.module';
import { AcceptedRestaurantsComponent } from './admin/accepted-restaurants/accepted-restaurants.component';
import { ShowRatingBasedRestaurantComponent } from './admin/show-rating-based-restaurant/show-rating-based-restaurant.component';
import { NewlyAddedRestaurantComponent } from './admin/newly-added-restaurant/newly-added-restaurant.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { UpdateDishComponent } from './menu/update-dish/update-dish.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';
import { AddDishService } from './menu/add-dish/add-dish.service';
import { MenuService } from './menu/menu.service';
import { UpdateDishService } from './menu/update-dish/update-dish.service';
import { VendorHomeService } from './vendor-home/vendor-home.service';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { CheckMenuComponent } from './check-menu/check-menu.component';
import { BookTableComponent } from './book-table/book-table.component';
import { PlaceAnOrderComponent } from './place-an-order/place-an-order.component';
import { AreaRecommendationComponent } from './recommendation/area-recommendation/area-recommendation.component';
import { DeleteDishComponent } from './menu/delete-dish/delete-dish.component';
import { ViewAllAddressComponent } from './user-address/view-all-address/view-all-address.component';
import {UpdateAddressComponent} from './user-address/update-address/update-address.component';
import { AddAddressComponent } from './user-address/add-address/add-address.component';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { TopUpWalletComponent } from './top-up-wallet/top-up-wallet.component';
import { ChatSupportComponent } from './chat-support/chat-support.component';






@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FootComponent,
    HomeComponent,
    TrendingRestaurantsComponent,
    RestaurantRegistrationComponent,
    MenuComponent,
    ViewOrderComponent,
    AddDishComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    UpdateDishComponent,
    VendorHomeComponent,
    AllRestaurantsComponent,
    CheckMenuComponent,
    BookTableComponent,
    AcceptedRestaurantsComponent,
    ShowRatingBasedRestaurantComponent,
    NewlyAddedRestaurantComponent,
    PlaceAnOrderComponent,
    AreaRecommendationComponent,
    DeleteDishComponent,
    ViewAllAddressComponent,
    UpdateAddressComponent,
    AddAddressComponent,
    AlertDialogComponent,
    TopUpWalletComponent,
    ChatSupportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxPaginationModule
  ],
  providers: [RestaurantRegistrationService,UpdateAddressComponent,AddDishService,MenuComponent,UpdateDishService,VendorHomeService,VendorHomeComponent, MenuService,LoginService,LoginGuard,AuthService,RegisterService],
  bootstrap: [AppComponent]   
 
})
export class AppModule { }
