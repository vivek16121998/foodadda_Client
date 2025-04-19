// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const server="foodaddaserver-env.eba-mbyeegm9.ap-south-1.elasticbeanstalk.com"
const portnumber="80"
const applicationName="cibo"

export const environment = {
  getRestaurants : "http://"+server+":"+portnumber+"/"+applicationName+"/searchAPI/viewAllRestaurants",
  registerUser:"http://"+server+":"+portnumber+"/"+applicationName+"/UserAPI/userRegister/",
  getOperatingRestaurants: "http://"+server+":"+portnumber+"/"+applicationName+"/AdminAPI/allRestaurants",
  deleteRestaurant:"http://"+server+":"+portnumber+"/"+applicationName+"/AdminAPI/deleteRestaurant/",
  newRestaurants:"http://"+server+":"+portnumber+"/"+applicationName+"/AdminAPI/newlyAddedRestaurants",
  approveRestaurant:"http://"+server+":"+portnumber+"/"+applicationName+"/AdminAPI/grantPermission/",
  getRatingsBasedRestaurant:"http://"+server+":"+portnumber+"/"+applicationName+"/AdminAPI/ratingsBasedRestaurant/",
  loginUri : "http://"+server+":"+portnumber+"/"+applicationName+"/UserAPI/userLogin",
  getOrders:"http://"+server+":"+portnumber+"/"+applicationName+"/orderAPI/viewAllOrders/",
  bookTable:"http://"+server+":"+portnumber+"/"+applicationName+"/booktableAPI/book/",
  getRestaurantName:"http://"+server+":"+portnumber+"/"+applicationName+"/orderAPI/getRestaurantName/",
  placeOrder:"http://"+server+":"+portnumber+"/"+applicationName+"/orderAPI/newOrder/",
  getAreaRecommendations:"http://"+server+":"+portnumber+"/"+applicationName+"/recommendationAPI/restaurantsByArea",

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
