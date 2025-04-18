import { Dish } from './Dish';
import { Users } from './Users';

export class DishRating{
    dishRatingId!:number;
	dish!:Dish;
	user!:Users;
	rating!:number;
}