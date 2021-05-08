import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


const routesChildren:Routes=[
{
  path:'',
  children:[
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'registro',
      component:RegisterComponent
    },
    {
      path:'**',
      redirectTo:'login'
    }
  ]
}
]


@NgModule({
  imports: [RouterModule.forChild(routesChildren)],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
