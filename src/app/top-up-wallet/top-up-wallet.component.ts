import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { Users } from '../models/Users';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../components/alert-dialog/alert-dialog.component';
import { TopUpWalletService } from './top-up-wallet.service';

@Component({
  selector: 'app-top-up-wallet',
  templateUrl: './top-up-wallet.component.html',
  styleUrls: ['./top-up-wallet.component.css']
})
export class TopUpWalletComponent {

  walletForm!: FormGroup;
  balance!: number
  user!:Users

  constructor(private fb: FormBuilder,private auth:AuthService,private dialog: MatDialog,private service:TopUpWalletService) {}

  ngOnInit(): void {

    this.auth.sessionWallet.subscribe(
      data=>{
        
        this.balance=data.availableAmount;
        
      }
    )
    this.auth.sessionUser.subscribe(
      data=>{
        
        this.user=data
        
      }
    )
    this.walletForm = this.fb.group({
      topUpAmount: [null, [Validators.required, Validators.min(1)]]
    });
  }

  topUpWallet(): void {
    if (this.walletForm.invalid) {
      
      const dialogRef = this.dialog.open(AlertDialogComponent, {
        data: { type: 'error', message:`Please enter a valid amount greater than 0.`}
      });

    }
    else{
       this.service.topUpWallet(this.walletForm.get('topUpAmount')?.value,this.user.userId).subscribe(
        data=>{
          this.user.wallet=data
          this.auth.nextUser(this.user)
          this.auth.setWallet(data)
          
          const dialogRef = this.dialog.open(AlertDialogComponent, {
            data: { type: 'success', message:` Top-up successful. Your new wallet balance is ₹${data.availableAmount}`}
          });
        },
        error=>{
          this.dialog.open(AlertDialogComponent, {
            data: { type: 'error', message: error.error.message || 'An error occurred.' }
          });
        }
       )
    }


  }
}
