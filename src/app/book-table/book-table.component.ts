import { Component, OnInit } from '@angular/core';
import { TransferdataService } from 'src/service/transferdata.service';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../models/Restaurant';
import { Time } from '@angular/common';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { TableBooking } from '../models/TableBooking';
import { BookTableService } from 'src/service/book-table.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {
  bookTable!:FormGroup;
  errorMessage! : string;
  successMessage:string="";
  restId!:number;
  restaurant!:Restaurant;
  table!:TableBooking;
  

  constructor(){}
  ngOnInit(): void {
    
  }
  getRestaurant(restId:number){
    
  }
  successPage(){
  
  }
  
  dateValidator(c: AbstractControl): { [key: string]: boolean } | null {
     return null;
  } 

  timeValidator(c:AbstractControl):{ [key: string]: boolean} | null{
    

    return null;
  }
}
