import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Users } from '../models/Users';
import { Roles } from '../models/Roles';
import { Router } from '@angular/router';
import { interval } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title = 'ciboClientSideApplication';
  userName: string = "";
  loggedIn: Boolean = false;
  confirmation: string = "";
  show!: boolean;
  roles: Roles[] = [];
  rolesTypes: string[] = [];
  moreRoles: Boolean = false;
  selectedRole!: string;
  availableAmount!:number

  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit() {
    this.auth.sessionUser.subscribe(data => {
      this.userName = data.userName;
      this.availableAmount= data.wallet.availableAmount
      if (this.userName != null) {
        this.loggedIn = true;
        this.roles = data.roles;
        for (let r of this.roles) {
          this.rolesTypes.push(r.roleType);
        }
        this.selectedRole = this.rolesTypes[0];
        this.emitevent();
      }
    });

    interval(10).subscribe(
      ()=>{
        this.auth.sessionWallet.subscribe(
          data=>{
            
            if(data.availableAmount==this.availableAmount){
                 
            }
            else{
              this.availableAmount=data.availableAmount
            }
          }
        )
      }
    )
  }

  // confirmLogout(){}
  logout() {
    this.selectedRole="";
    this.rolesPage();
    this.loggedIn = false;
    sessionStorage.clear();
    this.auth.user.userName = "";
    this.auth.user.userId = 0;
    this.rolesTypes = [];
    console.log(this.rolesTypes);
    this.router.navigate(['/home'])
  }

  rolesPage() {
    this.emitevent();
  }

  @Output()
  customevent: EventEmitter<string> = new EventEmitter<string>();
  emitevent() {
    this.customevent.emit(this.selectedRole);
  }
}
