// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const server="localhost"
const portnumber="4000"
const applicationName="cibo"

export const environment = {
  getRestaurants : "http://"+server+":"+portnumber+"/"+applicationName+"/searchAPI/viewAllRestaurants",
  registerUser:"http://"+server+":"+portnumber+"/"+applicationName+"/UserAPI/userRegister",
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
  getAddressList:"http://"+server+":"+portnumber+"/"+applicationName+"/UserAPI/getAddressList/",
  addAddress:"http://"+server+":"+portnumber+"/"+applicationName+"/UserAPI/addAddress/",
  deleteAddress:"http://"+server+":"+portnumber+"/"+applicationName+"/UserAPI/deleteAddress/",

  production: false
  
};

// const server="ezuuoxnl4g.execute-api.ap-south-1.amazonaws.com"
// const portnumber="80"
// const applicationName="v1"

// export const environment = {



//     getRestaurants : "https://"+server+"/"+applicationName+"/searchAPI/viewAllRestaurants",
//     registerUser:"https://"+server+"/"+applicationName+"/UserAPI/userRegister/",
//     getOperatingRestaurants: "https://"+server+"/"+applicationName+"/AdminAPI/allRestaurants",
//     deleteRestaurant:"https://"+server+"/"+applicationName+"/AdminAPI/deleteRestaurant/",
//     newRestaurants:"https://"+server+"/"+applicationName+"/AdminAPI/newlyAddedRestaurants",
//     approveRestaurant:"https://"+server+"/"+applicationName+"/AdminAPI/grantPermission/",
//     getRatingsBasedRestaurant:"https://"+server+"/"+applicationName+"/AdminAPI/ratingsBasedRestaurant/",
//     loginUri : "https://"+server+"/"+applicationName+"/UserAPI/userLogin",
//     getOrders:"https://"+server+"/"+applicationName+"/orderAPI/viewAllOrders/",
//     bookTable:"https://"+server+"/"+applicationName+"/booktableAPI/book/",
//     getRestaurantName:"https://"+server+"/"+applicationName+"/orderAPI/getRestaurantName/",
//     placeOrder:"https://"+server+"/"+applicationName+"/orderAPI/newOrder/",
//     getAreaRecommendations:"https://"+server+"/"+applicationName+"/recommendationAPI/restaurantsByArea",



//  production: true



// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
