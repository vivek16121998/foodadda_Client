import { Dish } from './Dish';
import { RestaurantTransaction } from './RestaurantTransaction';

export class Restaurant{
    restaurantId!:number;
	restaurantName!:string;
	restaurantContact!:string;
	restaurantType!:string;
	addressLine1!:string;
	area!:string;
	city!:string;
	resState!:string;
	pincode!:number;
	approvalStatus!:string;
	avgRating!:number;
	dishes:Array<Dish>=[];
	photoUrls:Array<string>=[];
	transaction!:RestaurantTransaction;
}