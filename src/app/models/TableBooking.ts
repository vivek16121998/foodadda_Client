import { Users } from './Users';
import { Restaurant } from './Restaurant';

export class TableBooking{
    bookingId!:number;
	bookingDate!:string;
	timeOfBooking!:string;
	noOfPeople!:number;
	restaurant!:Restaurant;
	user!:Users;
}