import { environment as common } from './environment';


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



 production: true



};