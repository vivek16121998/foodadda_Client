import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup,ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdateAddressService } from './update-address.service';
import { UserAddress } from 'src/app/models/UserAddress';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/auth.service';
import { Users } from 'src/app/models/Users';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  stateList: string[]=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal"];
  flag!:boolean;
  errorMessage!: string;
  successMessage!: string;
  updateForm!: FormGroup;
  successMsg!: String;
  address!: UserAddress;
  user!:Users
  constructor(private router: Router,private form:FormBuilder , private service: UpdateAddressService,private dialog: MatDialog,private service1:AuthService) {
    const navigation = this.router.getCurrentNavigation();
    const stateData = navigation?.extras?.state?.['data'];
    if(stateData){
      this.address=stateData;
    }
    else{
      this.router.navigate(['/home/addressbook'])
    }
  }

  ngOnInit() {

    this.service1.sessionUser.subscribe(
      data=>{
          this.user=data
      }
    )
    // Your code goes here
    this.updateForm=this.form.group({
      userAddressId:[this.address.userAddressId],
      userAddressName:[this.address.userAddressName,Validators.required],
      addressLine1:[this.address.addressLine1,Validators.required],
      addressLine2:[this.address.addressLine2,Validators.required],
      area:[this.address.area,[Validators.required,Validators.pattern("[A-Za-z]+([ ][A-Za-z]*)*")]],
      city:[this.address.city,[Validators.required,Validators.pattern("[A-Za-z]+([ ][A-Za-z]*)*")]],
      userState:[this.address.userState,Validators.required],
      pincode:[this.address.pincode,[Validators.required,Validators.pattern("[0-9]{6}")]]
  })
    
  }

  update() {

   // Your code goes here
   console.log(this.updateForm.value)
 

   this.service.update(this.updateForm.value,this.user.userId).subscribe(
    data => {
      this.showDialog('success', data, () => {
        this.updateForm.reset();
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
   )
  }

     
  close(){

        // Your code goes here
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
