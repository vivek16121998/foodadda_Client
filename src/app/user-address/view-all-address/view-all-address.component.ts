import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAddress } from 'src/app/models/UserAddress';
import { UpdateAddressService } from '../update-address/update-address.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/core/auth.service';
import { Users } from 'src/app/models/Users';
import { ViewAllAddressService } from './view-all-address.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-view-all-address',
  templateUrl: './view-all-address.component.html',
  styleUrls: ['./view-all-address.component.css']
})
export class ViewAllAddressComponent implements OnInit {

  userAddressList: UserAddress[]=[];
  userName!: String;
  user!:Users;
  pageSize:number=5;
  currentPage:number=1;
  errorMessage!: String;
  flag!: Boolean;
  addressDelete!: String;
  mdelMsg: string="Deleted successfully";
  constructor(private service:ViewAllAddressService,private service1:AuthService  ,private router:Router,private dialog: MatDialog) { }

  ngOnInit(): void {

    // Your code goes here
    this.service1.sessionUser.subscribe(
      data=>{
        this.user=data
        this.populateAddress(data.userId);
      }
    )
  }

  populateAddress(userID:number){
    
    // Your code goes here
      this.service.getAddressList(userID).subscribe(
        data=>{
          this.userAddressList=data
        },
        error=>{
          this.errorMessage=error.error.message;
        }
      )
  }

  deleteAddress(addressId: number) {
    this.service.deleteAddress(addressId, this.user.userId).subscribe(
      data => {
        this.dialog.open(AlertDialogComponent, {
          data: {
            type: 'success',
            message: `${data}`  // Show message from backend
          }
        });
         // Refresh the address list
         this.populateAddress(this.user.userId);

      },
      error => {
        // Check if error is a string and try to parse it
      if (typeof error.error === 'string') {
        try {
          const parsedError = JSON.parse(error.error);
          this.dialog.open(AlertDialogComponent, {
            data: {
              type: 'error',
              message: parsedError.message || 'Failed to delete address. Please try again.'
            }
          });
        } catch (e) {
          console.error('Error parsing string:', e);
        }
      }
        
      }
    );
  }
  

  updateAddress(userAddress: UserAddress) {

   // Your code goes here
  }

  addAddress(){
    
   // Your code goes here
      this.router.navigate(['/addAddress'])
  }

}
