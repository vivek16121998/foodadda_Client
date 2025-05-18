import { Component, OnInit, ViewChild } from '@angular/core';
import { TransferdataService } from 'src/service/transferdata.service';
import { Restaurant } from '../models/Restaurant';

import { OrderItems } from '../models/OrderItems';
import { Orders } from '../models/Orders';
import { PlaceAnOrderService } from '../place-an-order/place-an-order.service';
import { Dish } from '../models/Dish';
import { MatPaginator } from '@angular/material/paginator';
import { Users } from '../models/Users';
// import { Data } from '../place-an-order/data';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-check-menu',
  templateUrl: './check-menu.component.html',
  styleUrls: ['./check-menu.component.css']
})
export class CheckMenuComponent implements OnInit {
  restaurant!:Restaurant;
  restId!:number;
  orderList2!:OrderItems[];
  orderList!:OrderItems[];
  userId=sessionStorage.getItem('userId');;
  orderItem!:OrderItems;
  order:Orders=new Orders();
  orderPrevious:Orders = JSON.parse(sessionStorage.getItem("data") || '{}');
  quantityt!:number;
  bill!:number;
  itemAdded!:Boolean;
  successMessage!:String;
  errorMessage!:String;
  displayedColumns:string[] = ['name', 'quantity', 'price'];
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  rating!:number;
  o!:OrderItems;
  restIdPrevious!:Number;

successMsg:string="Item added successfully"
  user!:Users; 
  cust:boolean=false;
  constructor(private auth:AuthService,private _snackBar: MatSnackBar,private shared:TransferdataService,private route: ActivatedRoute,private router:Router,
    private orderService:PlaceAnOrderService) { }

  ngOnInit(): void {
    this.orderList=[];
    // this.orderList2=[];
    this.bill=0;
    this.route.params.subscribe(params =>{
      this.restId=params['restaurantId'];
    });
    this.restIdPrevious = Number.parseInt(sessionStorage.getItem("restId") || '{}');
    if(this.restIdPrevious!=0){
      if(this.restIdPrevious!=this.restId){
        sessionStorage.removeItem("restId")
      }
      else{
        if(this.orderPrevious!=null){
          this.order = this.orderPrevious
        }
      }
    }
    console.log(this.restId);
    this.getRestaurant(this.restId);
    this.auth.sessionUser.subscribe(data=> this.user = data);console.log(this.user);
  }

  getRestaurant(restId:number){
    this.shared.getAllRestaurants().subscribe(data => {
      this.orderList2=[];
      this.restaurant = data.filter(restaurant => restaurant.restaurantId==restId)[0];
      console.log(this.restaurant);
      sessionStorage.setItem("restId", this.restaurant.restaurantId.toString())
      for(let d of this.restaurant.dishes){
         this.o=new OrderItems();
         this.o.dish=d;
         this.o.qty=0;
         this.o.orderItemsId=0;
        this.orderList2.push(this.o);
      }
      console.log(this.orderList2)
    })   
  }

  addToCart(dish:Dish,quantity:number){
    this.auth.sessionUser.subscribe(
      data=>{
        if(data.userId==null){
          this.router.navigate(['login/'])
        }
        else{
          for(let r of this.user.roles){
            if(r.roleType=="CUSTOMER"){
                this.cust=true;
            }
          }
          if(this.cust==false){
            this.router.navigate(['login/']);
            //this.errorMessage="Sorry you can not avail this functionality. Please login as a CUSTOMER to do so.";
      
          }
      
          this._snackBar.open(this.successMsg, "", {
            duration: 2000,
          });
      
          
          if(this.order!=null){
            this.orderList = this.order.orderItemsList
          }
          this.itemAdded=false
          for(let item of this.orderList){
            if(item.dish.dishId==dish.dishId){
              item.qty+=1;
              this.itemAdded=true;
            }
          }
            for(let item of this.orderList2){
              if(item.dish.dishId==dish.dishId){
                item.qty+=1;
              }
          }
          if(this.itemAdded==false){
            this.orderItem = new OrderItems();
            this.orderItem.orderItemsId=0;
            this.orderItem.dish= dish;
            this.orderItem.qty = quantity;
        
            this.orderList.push(this.orderItem);
          }
      
      
            
          
          console.log("item added to cart")
          
          this.totalBill();
          console.log("bill is"+this.bill);
          // this.order.orderId = 0;
          if(this.order!=null){
            this.order.orderBill = this.bill;
            
            this.order.orderItemsList = this.orderList;
            this.order.orderStatus = "ACTIVE";
          }
          console.log(this.order)
          // console.log(this.order.orderItemsList)
          
          // this.data.storage = this.order;
          sessionStorage.setItem("data", JSON.stringify(this.order))
        }
      }
      
    )
    
    
    
  }
  // addToCart(dish:Dish, quantity:number){
  //   console.log("item added to cart")
  //   this.orderItem = new OrderItems();
  //   this.orderItem.orderItemsId=0;
  //   this.orderItem.dish= dish;
  //   this.orderItem.qty = quantity;

  //   this.orderList.push(this.orderItem);
  // }

  totalBill(){
    this.bill=0;
    for(let orderItem of this.orderList){
      console.log(orderItem.dish.price)
      this.bill+= orderItem.dish.price*orderItem.qty;
    }
  }

  placeTheOrder(){

    console.log("bill is"+this.bill);
    // this.order.orderId = 0;
    this.order.orderBill = this.bill;
    this.order.orderItemsList = this.orderList;
    console.log(this.order)
    console.log(this.order.orderItemsList)
    this.order.orderStatus = "ACTIVE";
    this.orderService.placeTheOrder(this.userId ||'', this.order).subscribe(

      response=>{
        if(response){
          this.successMessage = "Order Placed SuccessFully";
          this.errorMessage = "";
          this.router.navigate(['/placeOrder']);
          
        }
        else {

          this.successMessage = "Order Not Placed. Please! try again";
        }
      },
      error => {
        this.errorMessage =error.error.message;
        
      }
    )

  }

  seeYourCart(){
    // this.seeCart =true;
    console.log(this.orderList);
    this.totalBill();
    console.log("bill is"+this.bill);
    // this.order.orderId = 0;
    this.order.orderBill = this.bill;
    this.order.orderItemsList = this.orderList;
    // console.log(this.order)
    // console.log(this.order.orderItemsList)
    this.order.orderStatus = "ACTIVE";
    // this.data.storage = this.order;
    sessionStorage.setItem("data", JSON.stringify(this.order))
    this.router.navigate(['/placeOrder']);
  }
  

  
}
