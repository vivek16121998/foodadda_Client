import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderItems } from '../models/OrderItems';
import { Dish } from '../models/Dish';
import { Orders } from '../models/Orders';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { PlaceAnOrderService } from './place-an-order.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../core/auth.service';
import { Users } from '../models/Users';
import { AlertDialogComponent } from '../components/alert-dialog/alert-dialog.component';
// import { Data } from '../place-an-order/data';

@Component({
  selector: 'app-place-an-order',
  templateUrl: './place-an-order.component.html',
  styleUrls: ['./place-an-order.component.css']
})
export class PlaceAnOrderComponent implements OnInit {

  userName!:String
  order:Orders = JSON.parse(sessionStorage.getItem("data") || '{}');
  orderList!:OrderItems[];
  bill!:number;
  seeCart!:Boolean;
  successMessage!:String;
  errorMessage!:String;
  showTable:Boolean=false;
  userId!:String
  restId = Number.parseInt(sessionStorage.getItem("restId") || '{}')
  flag!:boolean
  errorflag!:boolean
  user!:Users
  disableplaceOrderbuttonflag!:boolean
  delMsg:string="Deleted successfully"
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  displayedColumns:string[] = ['name', 'quantity', 'price', 'remove'];
  constructor(private router:Router, private orderService:PlaceAnOrderService,private _snackBar: MatSnackBar,private auth:AuthService,private dialog: MatDialog) { 
    // this.order = this.data.storage;
    // e, private data:Data
  }

  ngOnInit( ): void {
    this.auth.sessionUser.subscribe(data => {
      this.userName = data.userName;
      this.userId=data.userId.toString();
    });
    console.log(this.order);
    this.orderList=this.order.orderItemsList;
    if(this.orderList.length>0){
      this.showTable=true
    }
    else{
      this.showTable=false;
    }
    this.bill = this.order.orderBill

  }

add(orderDish:OrderItems,qty:number){
  
  orderDish.qty=qty+1;
  this.totalBill();
  this.order.orderBill=this.bill;
  sessionStorage.setItem("data", JSON.stringify(this.order))
}
subtract(orderDish:OrderItems,qty:number){
  if(qty>1){
    orderDish.qty=qty-1;
    this.totalBill();
    this.order.orderBill=this.bill;
    sessionStorage.setItem("data", JSON.stringify(this.order))
  }
  
}

  removeItem(orderItem:OrderItems){
    this.orderList.splice(this.orderList.indexOf(orderItem), 1);
    console.log("removed")
    this.order.orderItemsList = this.orderList
    this.totalBill();
    this.order.orderBill = this.bill
    sessionStorage.setItem("data", JSON.stringify(this.order))
    if(this.orderList.length==0){
      this.showTable=false;
    }
    else{
      this.showTable=true;
    }
    
    this._snackBar.open(this.delMsg, "", {
      duration: 2000,
    });
  }

  totalBill(){
    this.bill=0
    for(let orderItem of this.orderList){
      this.bill+= orderItem.dish.price*orderItem.qty;
    }
  }
  placeTheOrder() {
    this.disableplaceOrderbuttonflag = true;
    this.flag = false;
  
    this.orderService.placeTheOrder(this.userId || '{}', this.order).subscribe(
      response => {
        if (response) {
          const message = `Order placed successfully! OrderId: ${response.orderId}`;
          const dialogRef = this.dialog.open(AlertDialogComponent, {
            data: { type: 'success', message }
          });
          this.user = JSON.parse(sessionStorage.getItem('user') || '{}');
          this.user.wallet.availableAmount = response.availableAmount;
          sessionStorage.setItem('user', JSON.stringify(this.user));
          this.auth.setavailableAmount(response.availableAmount);
          sessionStorage.removeItem('data');
          sessionStorage.removeItem('restId');
          // Auto-close after 10 seconds

          dialogRef.afterClosed().subscribe(() => {
            this.cleanupAfterSuccess(response);
          });
  
        } else {
          this.dialog.open(AlertDialogComponent, {
            data: { type: 'error', message: 'Order not placed. Please try again.' }
          });
        }
      },
      error => {
        this.dialog.open(AlertDialogComponent, {
          data: { type: 'error', message: error.error.message || 'An error occurred.' }
        });
        this.disableplaceOrderbuttonflag = false;
      }
    );
  }
  
  
  cleanupAfterSuccess(response: any) {
    
    this.router.navigate(['home/allRestaurants']);
  }
  goBack(){
    this.router.navigate(['/checkMenu', this.restId]);
  }
  goHome(){
    this.router.navigate(['home/allRestaurants'])
  }
  close(){

    this.router.navigate(['home/allRestaurants'])
  }
  closeerror(){
    this.errorflag=false
    this.errorMessage=""
    this.disableplaceOrderbuttonflag=false
  }


}
