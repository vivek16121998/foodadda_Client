import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorHomeService } from './vendor-home.service';
import { Restaurant } from '../models/Restaurant';

@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.css']
})
export class VendorHomeComponent implements OnInit {

  restaurant!: Restaurant;
  restId!: number;
  restaurantL: Restaurant[]=[];
  error!: string;
  photos:string[]=[];
 
  clicked:boolean=false;
  constructor() { }

  ngOnInit(): void {
    
    //your code goes here
  }

  getDish(){
    
    //your code goes here
  }

  menu(restaurant:Restaurant){

   //your code goes here
  }


  close(){

   //your code goes here
  }

  register(){
    
    //your code goes here
  }
}
