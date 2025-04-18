import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Dish } from '../models/Dish';
import { MenuService } from './menu.service';

import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    /** trigger the animation when loadAnimation (an attribute in div tag of Html)
     * value has a transition from void to some value(*) ( void when the component is not at loaded,
     * once the component is loaded it will be initialized to active)
     */
    trigger('loadAnimation', [
      transition('void => *', [
        animate("1000ms ease-out", keyframes([      // key frame specifies the set of styles which should be applied based on timeline
          style({ opacity: 0, offset: 0 }),         // at 0th (offset * time) milisecond opacity is 0
          style({ opacity: 1, offset: 1 }),         // at 1000th (offset * time) milisecond opacity is 1
        ]))
      ])
    ])
  ]
})

export class MenuComponent implements OnInit {

  dish!: Dish;
  restId!: number;
  dishL: Dish[]=[];
 approvalStatus!:String;

  page: number = 0;
  size: number = 5;
  error!: string;
  temp: number[] = [];
  dishDel!: String;
  list!: boolean;
 
flag!:boolean;

  constructor(){}
  ngOnInit(): void {
   
    //  You code goes here
  }

  getDish() {
    
    //  You code goes here
  }



  add() {

    //  You code goes here
  }

  delete(dishId: number) {
    
   //  You code goes here
  }


  update(dish: Dish) {

   //  You code goes here
  }

  close(){

   //  You code goes here
  }
  
}


