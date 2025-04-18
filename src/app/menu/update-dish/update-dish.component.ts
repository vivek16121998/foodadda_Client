import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UpdateDishService } from './update-dish.service';
import { MenuComponent } from '../menu.component';

import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-update-dish',
  templateUrl: './update-dish.component.html',
  styleUrls: ['./update-dish.component.css']
})
export class UpdateDishComponent implements OnInit {
  errorMessage!: String;
  isEditable = false;
  firstFormGroup!: FormGroup;
  flag!:boolean;
successMsg!: String;
restaurantType!:String;


  constructor() { }
  dish:any;
  ngOnInit(): void {

   //  You code goes here
    
  }
  update() {
    //  You code goes here
    
    }
  }