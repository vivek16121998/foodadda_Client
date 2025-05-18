import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-top-up-wallet',
  templateUrl: './top-up-wallet.component.html',
  styleUrls: ['./top-up-wallet.component.css']
})
export class TopUpWalletComponent {

  walletForm!: FormGroup;
  balance!: number
  message: string = '';

  constructor(private fb: FormBuilder,private auth:AuthService) {}

  ngOnInit(): void {

    this.auth.sessionWallet.subscribe(
      data=>{
        
        this.balance=data.availableAmount;
        
      }
    )
    this.walletForm = this.fb.group({
      topUpAmount: [null, [Validators.required, Validators.min(1)]]
    });
  }

  topUpWallet(): void {
    if (this.walletForm.invalid) {
      this.message = 'Please enter a valid amount greater than 0.';
      return;
    }

    const amount = this.walletForm.value.topUpAmount;
    this.balance += amount;
    this.message = `Successfully topped up ₹${amount.toFixed(2)}`;
    this.walletForm.reset();
  }
}
