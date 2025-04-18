import { Dish } from './Dish';
import { Restaurant } from './Restaurant';

export class UserLikes{
    likeId!:number;
	vegNonveg!:string;
	dish!:Dish;
	restaurant!:Restaurant;
}