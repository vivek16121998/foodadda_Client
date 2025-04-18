import { OrderItems } from './OrderItems';

export class Orders{
    orderId!:number;
	orderBill!:number;
	orderStatus!:string;
	orderItemsList:Array<OrderItems>=[];
}