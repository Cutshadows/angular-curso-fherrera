import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  nombreLower:string='douglas';
  nombreCompletLower:string='douglas baRraZa';

  fecha:Date =new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
