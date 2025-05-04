import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddAddressService } from './add-address.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { Users } from 'src/app/models/Users';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
register() {
throw new Error('Method not implemented.');
}

  errorMessage!: String;
  successMsg!: String;
  addAddressForm!: FormGroup;
  userAddressId!: number;
  flag:boolean=false;
  errorflag!:boolean
  user!:Users;
  successMessage!:String
  stateList: string[] = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh","Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal"];
  constructor(private form:FormBuilder,private service:AddAddressService,private service1:AuthService,private router:Router, private dialog: MatDialog) { }

  ngOnInit(): void {

    // Your code goes here
    
    this.service1.sessionUser.subscribe(
      data=>{
          this.user=data
      }
    )
    this.addAddressForm=this.form.group({
        userAddressName:["",Validators.required],
        addressLine1:["",Validators.required],
        addressLine2:["",Validators.required],
        area:["",[Validators.required,Validators.pattern("[A-Za-z]+([ ][A-Za-z]*)*")]],
        city:["",[Validators.required,Validators.pattern("[A-Za-z]+([ ][A-Za-z]*)*")]],
        userState:["",Validators.required],
        pincode:["",[Validators.required,Validators.pattern("[0-9]{6}")]]
    })
  }
  add() {
    this.service.addAddress(this.addAddressForm.value, this.user.userId).subscribe(
      data => {
        this.showDialog('success', data, () => {
          this.addAddressForm.reset();
          this.router.navigate(['/home/addressbook']);
        });
      },
      error => {
        let message = 'An unexpected error occurred.';
        if (typeof error.error === 'string') {
          try {
            const parsed = JSON.parse(error.error);
            message = parsed.message || message;
          } catch (e) {
            console.error('JSON parse error:', e);
          }
        }
        this.showDialog('error', message);
      }
    );
  }
  

  cancel(){

    // Your code goes here
  }

  close(){

  // Your code goes here
    this.flag=false;
    this.successMessage=""
    this.reload();
  }
  closeerror(){

    // Your code goes here
      this.errorflag=false;
      this.errorMessage=""
    }

  reload(){

   // Your code goes here
   this.router.navigate(['/addressbook']);
  }

  showDialog(type: 'success' | 'error', message: string, afterClose?: () => void) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: { type, message },
      width: '400px',
    });
  
    dialogRef.afterClosed().subscribe(() => {
      if (afterClose) afterClose();
    });
  }
  

}