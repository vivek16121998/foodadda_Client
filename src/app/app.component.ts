import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './core/auth.service';
import { Router } from '@angular/router';
import { Roles } from './models/Roles';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ciboClientSideApplication';
  role!: string;
  drawerMode: 'side' | 'over' = 'side';
  isScreenLarge = true;

  constructor(private auth: AuthService,private breakpointObserver: BreakpointObserver) { 
    this.breakpointObserver
    .observe(['(max-width: 767px)'])  // 👈 Custom media query
    .subscribe(result => {
      this.drawerMode = result.matches ? 'over' : 'side';
      this.isScreenLarge = !result.matches;
    });
  }
  ngOnInit() {
    const data = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.auth.nextUser(data);
    this.auth.sessionUser.subscribe(
      data=>{
        console.log(data)
      }
    )
    this.auth.setWallet(data.wallet)
  }
  updateFromChild($event: any) {
    this.role = $event;
  }

  ngOnDestroy() {
    sessionStorage.clear();

  }
}
