import { environment as common } from './environment';


const server="backend.foodadda.co.in"
const portnumber="80"

export const environment = {



    getRestaurants : "https://"+server+"/searchAPI/viewAllRestaurants",
    registerUser:"https://"+server+"/UserAPI/userRegister",
    getOperatingRestaurants: "https://"+server+"/AdminAPI/allRestaurants",
    deleteRestaurant:"https://"+server+"/AdminAPI/deleteRestaurant/",
    newRestaurants:"https://"+server+"/AdminAPI/newlyAddedRestaurants",
    approveRestaurant:"https://"+server+"/AdminAPI/grantPermission/",
    getRatingsBasedRestaurant:"https://"+server+"/AdminAPI/ratingsBasedRestaurant/",
    loginUri : "https://"+server+"/UserAPI/userLogin",
    getOrders:"https://"+server+"/orderAPI/viewAllOrders/",
    bookTable:"https://"+server+"/booktableAPI/book/",
    getRestaurantName:"https://"+server+"/orderAPI/getRestaurantName/",
    placeOrder:"https://"+server+"/orderAPI/newOrder/",
    getAreaRecommendations:"https://"+server+"/recommendationAPI/restaurantsByArea",
    getAddressList:"https://"+server+"/UserAPI/getAddressList/",
    addAddress:"https://"+server+"/UserAPI/addAddress/",
    deleteAddress:"https://"+server+"/UserAPI/deleteAddress/",
    updateAddress:"https://"+server+"/UserAPI/updateAddress/",


 production: true



};