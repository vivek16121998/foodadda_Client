import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewOrderService } from 'src/service/view-order.service';
import { AuthService } from '../core/auth.service';
import { Orders } from '../models/Orders';
import {MessageService} from 'primeng/api';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';


export interface PeriodicElement {
  orderId: number;
  orderBill: number;
  orderStatus: string;
  orderItemsList: string;
  restaurantName: string;
  // orderItemsList:Array<OrderItems>;
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
  restaurantNames:string[]=new Array<string>();
  errorMessage1: any;
  constructor() { }

  displayedColumns: string[] = ['orderId', 'restaurantName' , 'orderItemsList', 'billAmount', 'orderStatus' ];

  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;


ngOnInit() {

 //your code goes here
}
getRestaurantName(orderList: any[]) {


 //your code goes here

}
getOrders() {
   
   //your code goes here
}

}
