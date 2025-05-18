import { environment as common } from './environment';


const server="backend.foodadda.co.in"
const portnumber="80"
const applicationName="cibo"

export const environment = {



    getRestaurants : "https://"+server+"/"+applicationName+"/searchAPI/viewAllRestaurants",
    registerUser:"https://"+server+"/"+applicationName+"/UserAPI/userRegister",
    getOperatingRestaurants: "https://"+server+"/"+applicationName+"/AdminAPI/allRestaurants",
    deleteRestaurant:"https://"+server+"/"+applicationName+"/AdminAPI/deleteRestaurant/",
    newRestaurants:"https://"+server+"/"+applicationName+"/AdminAPI/newlyAddedRestaurants",
    approveRestaurant:"https://"+server+"/"+applicationName+"/AdminAPI/grantPermission/",
    getRatingsBasedRestaurant:"https://"+server+"/"+applicationName+"/AdminAPI/ratingsBasedRestaurant/",
    loginUri : "https://"+server+"/"+applicationName+"/UserAPI/userLogin",
    getOrders:"https://"+server+"/"+applicationName+"/orderAPI/viewAllOrders/",
    bookTable:"https://"+server+"/"+applicationName+"/booktableAPI/book/",
    getRestaurantName:"https://"+server+"/"+applicationName+"/orderAPI/getRestaurantName/",
    placeOrder:"https://"+server+"/"+applicationName+"/orderAPI/newOrder/",
    getAreaRecommendations:"https://"+server+"/"+applicationName+"/recommendationAPI/restaurantsByArea",
    getAddressList:"https://"+server+"/"+applicationName+"/UserAPI/getAddressList/",
    addAddress:"https://"+server+"/"+applicationName+"/UserAPI/addAddress/",
    deleteAddress:"https://"+server+"/"+applicationName+"/UserAPI/deleteAddress/",
    updateAddress:"https://"+server+"/"+applicationName+"/UserAPI/updateAddress/",


 production: true



};