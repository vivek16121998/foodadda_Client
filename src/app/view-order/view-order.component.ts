import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewOrderService } from 'src/service/view-order.service';
import { AuthService } from '../core/auth.service';
import { Orders } from '../models/Orders';
import {MessageService} from 'primeng/api';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { OrderItems } from '../models/OrderItems';



export interface PeriodicElement {
  orderId: number;
  orderBill: number;
  orderStatus: string;
  restaurantName: string;
  orderItemsList:Array<OrderItems>;
}




@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css'],
  providers: [MessageService],
})
export class ViewOrderComponent implements OnInit
{panelOpenState = false;
  errorMessage!:String;
  orderDetails:Orders[]=new Array<Orders>()
  successMessage!:string;
  userId=sessionStorage.getItem('userId');
  show:boolean = true;
  dishId:number[]=new Array<number>();
  errorMessage1: any;
  pageSize=5;
  currentPage=1;
  orders: PeriodicElement[] = [];

  constructor(private service:ViewOrderService) { }
  displayedColumns: string[] = ['Order Id' , 'Restaurant Name' ,'Dish Details', 'Bill Amount','Order Status' ];
  
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;


ngOnInit() {

 //your code goes here
 this.getOrders();
}
getRestaurantName(dishId:number[]){

 //your code goes here
 this.service.getRestaurantNames(dishId).subscribe(
  data=>{

    for(let i=0;i<this.orderDetails.length;i++){
      const order: PeriodicElement = {
        orderId: this.orderDetails[i].orderId,
        orderBill: this.orderDetails[i].orderBill,
        orderStatus: this.orderDetails[i].orderStatus,
        restaurantName:data[i],
        orderItemsList: this.orderDetails[i].orderItemsList,
      };
      this.orders.push(order)
      
    }
    this.orders.sort((a, b) => b.orderId - a.orderId);
  }
 )

}
getOrders() {
   
   //your code goes here
   const dishidarray = new Array<number>();
   this.service.getAllOrders().subscribe(
    data=>{
        this.orderDetails=data;
        for(const orders of data){
          dishidarray.push(orders.orderItemsList[0].dish.dishId);
        }
        this.getRestaurantName(dishidarray)
    },
    error=>{
      this.errorMessage=error.error.message
    }
    
   )
}

}
