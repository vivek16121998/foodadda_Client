import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddDishComponent } from './menu/add-dish/add-dish.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantRegistrationComponent } from './restaurant-registration/restaurant-registration.component';
import { AdminComponent } from './admin/admin.component';
import { ShowRatingBasedRestaurantComponent } from './admin/show-rating-based-restaurant/show-rating-based-restaurant.component';
import { AcceptedRestaurantsComponent } from './admin/accepted-restaurants/accepted-restaurants.component';
import { NewlyAddedRestaurantComponent } from './admin/newly-added-restaurant/newly-added-restaurant.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { TrendingRestaurantsComponent } from './trending-restaurants/trending-restaurants.component';

import { UpdateDishComponent } from './menu/update-dish/update-dish.component';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';

import { PlaceAnOrderComponent } from './place-an-order/place-an-order.component';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { CheckMenuComponent } from './check-menu/check-menu.component';
import { BookTableComponent } from './book-table/book-table.component';
import { AreaRecommendationComponent } from './recommendation/area-recommendation/area-recommendation.component';
import { LoginGuard } from './login/login-guard.service';
import { DeleteDishComponent } from './menu/delete-dish/delete-dish.component';
import { ViewAllAddressComponent } from './user-address/view-all-address/view-all-address.component';
import { UpdateAddressComponent } from './user-address/update-address/update-address.component';
import { AddAddressComponent } from './user-address/add-address/add-address.component';
import { TopUpWalletComponent } from './top-up-wallet/top-up-wallet.component';
import { ChatSupportComponent } from './chat-support/chat-support.component';



const routes: Routes = [


  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "home/trends", component: TrendingRestaurantsComponent },
  { path: 'login', component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home/restaurantRegister", component: RestaurantRegistrationComponent, canActivate: [LoginGuard] },
  { path: "menu", component: MenuComponent, canActivate: [LoginGuard] },
  { path: "addDish", component: AddDishComponent, canActivate: [LoginGuard] },
  { path: "update", component: UpdateDishComponent, canActivate: [LoginGuard] },
  { path: "home/vendorHome", component: VendorHomeComponent, canActivate: [LoginGuard] },
  { path: 'home/viewMyOrders', component: ViewOrderComponent, canActivate: [LoginGuard] },

  { path: 'home/allRestaurants', component: AllRestaurantsComponent },
  { path: 'checkMenu/:restaurantId', component: CheckMenuComponent },
  { path: 'book/:restaurantId', component: BookTableComponent, canActivate: [LoginGuard] },
  { path: "adminPage", component: AdminComponent, canActivate: [LoginGuard] },
  { path: "acceptedRestaurants", component: AcceptedRestaurantsComponent, canActivate: [LoginGuard] },
  { path: "showRatingBasedRestaurant", component: ShowRatingBasedRestaurantComponent, canActivate: [LoginGuard] },
  { path: "newlyAddedRestaurant", component: NewlyAddedRestaurantComponent, canActivate: [LoginGuard] },
  { path: "placeOrder", component: PlaceAnOrderComponent, canActivate: [LoginGuard] },
  { path: "delete", component: DeleteDishComponent, canActivate:[LoginGuard] },
  { path: 'home/viewMyOrders', component: ViewOrderComponent, canActivate: [LoginGuard] },
  { path: 'placeOrder/:order', component: PlaceAnOrderComponent },
  { path: 'home/areaRecommendation', component: AreaRecommendationComponent, canActivate: [LoginGuard] },
  { path: "placeOrder", component: PlaceAnOrderComponent, canActivate: [LoginGuard] },
  { path: "home/cart", component: PlaceAnOrderComponent, canActivate: [LoginGuard] },
  { path: "home/addressbook", component: ViewAllAddressComponent, canActivate:[LoginGuard]},
  { path: "home/wallet", component: TopUpWalletComponent, canActivate:[LoginGuard]},
  { path: "updateAddress", component: UpdateAddressComponent, canActivate:[LoginGuard]},
  { path: "addAddress", component: AddAddressComponent, canActivate:[LoginGuard]},
  { path: "chat-support",component:ChatSupportComponent,canActivate:[LoginGuard]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
