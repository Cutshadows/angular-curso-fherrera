import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

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

  constructor() { }

  ngOnInit(): void {
  }


  reason = '';

  // close(reason: string) {
  //   this.reason = reason;
  //   this.sidenav.close();
  // }

  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
