import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit():void {
      this.items = [
          {
              label: 'Pipes en Angular',
              icon: 'pi pi-desktop',
              items: [
                      {label: 'Textos y Fechas', icon: 'pi pi-align-left', routerLink:'/'},
                      {label: 'Numeros', icon: 'pi pi-dollar', routerLink:'numeros'},
                      {label: 'No Comunes', icon: 'pi pi-globe', routerLink:'no-comunes'},
                  ]

            //   items: [{
            //           label: 'New', 
            //           icon: 'pi pi-fw pi-plus',
            //           items: [
            //               {label: 'Project'},
            //               {label: 'Other'},
            //           ]
            //       },
            //       {label: 'Open'},
            //       {label: 'Quit'}
            //   ]
          },
          {
              label: 'Pipes personalizados',
              icon: 'pi pi-cog',
            //   items: [
            //       {label: 'Delete', icon: 'pi pi-fw pi-trash'},
            //       {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            //   ]
          }
      ];
  }

}
