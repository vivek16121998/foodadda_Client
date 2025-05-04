import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup,ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { RegisterService } from 'src/service/register.service';
import { Router } from '@angular/router';
import { CustomValidators } from './custom-validators';
import { validate } from 'json-schema';
import { AlertDialogComponent } from '../components/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
 selector: 'app-register',
 templateUrl: './register.component.html',
 styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
 stateList: string[]=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal"];
 flag!:boolean;
 isEditable = false;
 errorMessage!: string;
 successMessage!: string;
 registerForm!: FormGroup;
 rolesTypes:string[]=["CUSTOMER","VENDOR"];
 user="CUSTOMER"

 constructor(private form:FormBuilder,private service:RegisterService,private router:Router,private dialog: MatDialog) { }

 ngOnInit() {
 //your code goes here
 this.registerForm=this.form.group({
  userName:["",[Validators.required,Validators.pattern("[A-Z][a-z]+([ ][A-Za-z]*)*")]],
  contactNumber:["",[Validators.required,Validators.pattern("[6-9][0-9]{9}$")]],
  emailId:["",[Validators.required,Validators.email]],
  password: [
   "",
   Validators.compose([
    Validators.required,
    // check whether the entered password has a number
    CustomValidators.patternValidator(/\d/, {
     hasNumber: true
    }),
    // check whether the entered password has upper case letter
    CustomValidators.patternValidator(/[A-Z]/, {
     hasCapitalCase: true
    }),
    // check whether the entered password has a lower case letter
    CustomValidators.patternValidator(/[a-z]/, {
     hasSmallCase: true
    }),
    // check whether the entered password has a special character
    CustomValidators.patternValidator(
     /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
     {
      hasSpecialCharacters: true
     }
    ),
    Validators.minLength(8)
   ])
  ],
  confirmPassword:["",Validators.required],
  userRole:["CUSTOMER",[Validators.required]],
  // addressName:[""],
  // addressLine1:[""],
  // addressLine2:[""],
  // area:[""],
  // city:[""],
  // resState:[""],
  // pincode:[""]
 },
 {
  validator: CustomValidators.passwordMatchValidator
 })
 }

 register() {
  console.log(this.registerForm.value);

  this.service.register(this.registerForm.value).subscribe(
    data => {
      // Success: Open a dialog with the success message
      const message =data; // Customize this message as needed.
      const dialogRef = this.dialog.open(AlertDialogComponent, {
        data: { type: 'success', message }
      });

      // Execute cleanup logic after dialog is closed
      dialogRef.afterClosed().subscribe(() => {
        // Reset the form after closing the dialog
        this.registerForm.reset();
        this.close();
      });

    },
    error => {
      // Handle error and open error dialog
      let errorMessage = 'Registration failed. Please try again.';

      // Check if error is a string and try to parse it
      if (typeof error.error === 'string') {
        try {
          const parsedError = JSON.parse(error.error);
          errorMessage = parsedError.message;
        } catch (e) {
          console.error('Error parsing string:', e);
        }
      }

      this.dialog.open(AlertDialogComponent, {
        data: { type: 'error', message: errorMessage }
      });
    }
  );
}


 close(){

 //your code goes here
     this.router.navigate(["/login"])
 }

 reload(){

 //your code goes here
  this.router.navigate(["/register"])
 }

//  savechange(r:String){
//   console.log(r)
//   if(r==="CUSTOMER"){
//    this.registerForm.get('addressName')?.setValidators([Validators.required])
//    this.registerForm.get('addressName')?.updateValueAndValidity()
//    this.registerForm.get('addressLine1')?.setValidators([Validators.required])
//    this.registerForm.get('addressLine1')?.updateValueAndValidity()
//    this.registerForm.get('addressLine2')?.setValidators([Validators.required])
//    this.registerForm.get('addressLine2')?.updateValueAndValidity()
//    this.registerForm.get('area')?.setValidators([Validators.required,Validators.pattern("[A-Za-z]+([ ][A-Za-z]*)*")])
//    this.registerForm.get('area')?.updateValueAndValidity()
//    this.registerForm.get('city')?.setValidators([Validators.required,Validators.pattern("[A-Za-z]+([ ][A-Za-z]*)*")])
//    this.registerForm.get('city')?.updateValueAndValidity()
//    this.registerForm.get('resState')?.setValidators([Validators.required])
//    this.registerForm.get('resState')?.updateValueAndValidity()
//    this.registerForm.get('pincode')?.setValidators([Validators.required,Validators.pattern("[0-9]{6}")])
//    this.registerForm.get('pincode')?.updateValueAndValidity()
//   }
//   if(r==="VENDOR"){
//    this.registerForm.get('addressName')?.setValidators([])
//    this.registerForm.get('addressName')?.updateValueAndValidity()
//    this.registerForm.get('addressLine1')?.setValidators([])
//    this.registerForm.get('addressLine1')?.updateValueAndValidity()
//    this.registerForm.get('addressLine2')?.setValidators([])
//    this.registerForm.get('addressLine2')?.updateValueAndValidity()
//    this.registerForm.get('area')?.setValidators([])
//    this.registerForm.get('area')?.updateValueAndValidity()
//    this.registerForm.get('city')?.setValidators([])
//    this.registerForm.get('city')?.updateValueAndValidity()
//    this.registerForm.get('resState')?.setValidators([])
//    this.registerForm.get('resState')?.updateValueAndValidity()
//    this.registerForm.get('pincode')?.setValidators([])
//    this.registerForm.get('pincode')?.updateValueAndValidity()
//    this.registerForm.get('addressName')?.setValue("")
//    this.registerForm.get('addressLine1')?.setValue("")
//    this.registerForm.get('addressLine2')?.setValue("")
//    this.registerForm.get('area')?.setValue("")
//    this.registerForm.get('city')?.setValue("")
//    this.registerForm.get('resState')?.setValue("")
//    this.registerForm.get('pincode')?.setValue("")
//   }
//  }
}