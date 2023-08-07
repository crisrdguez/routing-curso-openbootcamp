import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  email:string="";
  pass:string="";

  constructor(private router:Router, private authService:AuthService){

  }

  ngOnInit(): void {
    
      let token = sessionStorage.getItem('token');

      if(token){
        this.router.navigate(['home']);
      }
  }

  loginUser(){
    this.authService.login(this.email, this.pass).subscribe({
      next(value) {
        if(value.token){
          sessionStorage.setItem('token',value.token);
          
        }

      },
      error(err) {
        console.error(`Ha ocurrido un error ${err}`)
      },
      complete() {
        console.info('Se ha completado la llamada de login')
      },
    }
    ) 
    this.router.navigate(['home']);
  }

}
