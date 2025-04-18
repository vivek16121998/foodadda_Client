// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  getRestaurants : "http://localhost:4000/cibo/searchAPI/viewAllRestaurants",
  registerUser:"http://localhost:4000/cibo/UserAPI/userRegister/",
  getOperatingRestaurants: "http://localhost:4000/cibo/AdminAPI/allRestaurants",
  deleteRestaurant:"http://localhost:4000/cibo/AdminAPI/deleteRestaurant/",
  newRestaurants:"http://localhost:4000/cibo/AdminAPI/newlyAddedRestaurants",
  approveRestaurant:"http://localhost:4000/cibo/AdminAPI/grantPermission/",
  getRatingsBasedRestaurant:"http://localhost:4000/cibo/AdminAPI/ratingsBasedRestaurant/",
  loginUri : "http://localhost:4000/cibo/UserAPI/userLogin",
  getOrders:"http://localhost:4000/cibo/orderAPI/viewAllOrders/",
  bookTable:"http://localhost:4000/cibo/booktableAPI/book/",
  getRestaurantName:"http://localhost:4000/cibo/orderAPI/getRestaurantName/",
  placeOrder:"http://localhost:4000/cibo/orderAPI/newOrder/",
  getAreaRecommendations:"http://localhost:4000/cibo/recommendationAPI/restaurantsByArea",

  production: false
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
