import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`.container{
    margin: 1rem;
  }`
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  reason:string = '';
  // auth!:AuthModels;


  get auth(){
    return this.authService.auth;
  }
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['./auth'])
  }

  // close(reason: string) {
  //   this.reason = reason;
  //   this.sidenav.close();
  // }

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
