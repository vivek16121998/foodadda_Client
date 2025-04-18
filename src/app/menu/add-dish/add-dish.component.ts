import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Dish } from 'src/app/models/Dish';
import { AddDishService } from './add-dish.service';
import { MenuComponent } from '../menu.component';

import { MatDialog } from '@angular/material/dialog';
import { CheckMenuComponent } from 'src/app/check-menu/check-menu.component';


@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {


  errorMessage!: String;
 
  successMsg!: String;

  addDishForm!: FormGroup;
  dish!: Dish;
  form!: FormArray;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = false;
  flag = false;
  restaurantType!:String;
  constructor() { }

  ngOnInit(): void {

   //  You code goes here
  }

  add() {

   //  You code goes here


  }
  close(){

   //  You code goes here
  }

  reload(){
    
    //  You code goes here
  }

 
}


