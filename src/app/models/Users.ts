import { Roles } from './Roles';
import { Wallet } from './Wallet';
import { Restaurant } from './Restaurant';
import { UserAddress } from './UserAddress';
import { UserLikes } from './UserLikes';
import { Orders } from './Orders';

export class Users{
    userId!:number;
	userName!:string;
	contactNumber!:string;
	emailId!:string;
	password!:string;
	roles:Array<Roles>=[];
	restaurants:Array<Restaurant>=[];
	addressList:Array<UserAddress>=[];
	wallet!:Wallet;
	userLikesList:Array<UserLikes>=[];
	ordersList:Array<Orders>=[];
}