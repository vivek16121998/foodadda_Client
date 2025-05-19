// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const server="localhost"
const portnumber="4000"

export const environment = {
  getRestaurants : "http://"+server+":"+portnumber+"/searchAPI/viewAllRestaurants",
  registerUser:"http://"+server+":"+portnumber+"/UserAPI/userRegister",
  getOperatingRestaurants: "http://"+server+":"+portnumber+"/AdminAPI/allRestaurants",
  deleteRestaurant:"http://"+server+":"+portnumber+"/AdminAPI/deleteRestaurant/",
  newRestaurants:"http://"+server+":"+portnumber+"/AdminAPI/newlyAddedRestaurants",
  approveRestaurant:"http://"+server+":"+portnumber+"/AdminAPI/grantPermission/",
  getRatingsBasedRestaurant:"http://"+server+":"+portnumber+"/AdminAPI/ratingsBasedRestaurant/",
  loginUri : "http://"+server+":"+portnumber+"/UserAPI/userLogin",
  getOrders:"http://"+server+":"+portnumber+"/orderAPI/viewAllOrders/",
  bookTable:"http://"+server+":"+portnumber+"/booktableAPI/book/",
  getRestaurantName:"http://"+server+":"+portnumber+"/orderAPI/getRestaurantName/",
  placeOrder:"http://"+server+":"+portnumber+"/orderAPI/newOrder/",
  getAreaRecommendations:"http://"+server+":"+portnumber+"/recommendationAPI/restaurantsByArea",
  getAddressList:"http://"+server+":"+portnumber+"/UserAPI/getAddressList/",
  addAddress:"http://"+server+":"+portnumber+"/UserAPI/addAddress/",
  deleteAddress:"http://"+server+":"+portnumber+"/UserAPI/deleteAddress/",
  updateAddress:"http://"+server+":"+portnumber+"/UserAPI/updateAddress/",
  production: false
  
};

// const server="ezuuoxnl4g.execute-api.ap-south-1.amazonaws.com"
// const portnumber="80"
// const applicationName="v1"

// export const environment = {



//     getRestaurants : "https://"+server+"/searchAPI/viewAllRestaurants",
//     registerUser:"https://"+server+"/UserAPI/userRegister/",
//     getOperatingRestaurants: "https://"+server+"/AdminAPI/allRestaurants",
//     deleteRestaurant:"https://"+server+"/AdminAPI/deleteRestaurant/",
//     newRestaurants:"https://"+server+"/AdminAPI/newlyAddedRestaurants",
//     approveRestaurant:"https://"+server+"/AdminAPI/grantPermission/",
//     getRatingsBasedRestaurant:"https://"+server+"/AdminAPI/ratingsBasedRestaurant/",
//     loginUri : "https://"+server+"/UserAPI/userLogin",
//     getOrders:"https://"+server+"/orderAPI/viewAllOrders/",
//     bookTable:"https://"+server+"/booktableAPI/book/",
//     getRestaurantName:"https://"+server+"/orderAPI/getRestaurantName/",
//     placeOrder:"https://"+server+"/orderAPI/newOrder/",
//     getAreaRecommendations:"https://"+server+"/recommendationAPI/restaurantsByArea",



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
