import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';



const routes:Routes=[
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'404',
    component:ErrorPagesComponent
  },{
    path:'**',
    // component:ErrorPagesComponent
    redirectTo:'404'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
