import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthModels } from '../../interfaces/auth.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(private router:Router, private authServ:AuthService) { }

  login(){
    //Ir al backend
    //un usuario

    // this.router.navigate(['./heroes']);

    this.authServ.login()
      .subscribe(
        (authorization:AuthModels)=>{
          if(authorization.id){
            this.router.navigate(['./heroes']);
          }
        }
      )
  }

}
