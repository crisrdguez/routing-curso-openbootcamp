import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  constructor(private authService:AuthService){} //Le paso el servicio que he creado


  ngOnInit(): void {
    // Le tengo que pasar un email y un password, según la api https://reqres.in/ para login exitoso
    this.authService.login("eve.holt@reqres.in", "cityslicka").subscribe({
      next(value) {
        console.log("Respuesta login",value);
        if(value.token){
          sessionStorage.setItem('token',value.token);
        }
      },
      error(err) {
        console.error(`Ha ocurrido un error ${err}`)
      },
      complete() {
        console.info('Se ha completado la llamada de login a REQRES')
      },
    }
    ) 

    /*

    ESTA FORMA ESTA DEPRECATED
    this.authService.login("eve.holt@reqres.in","cityslicka").subscribe(
      (response) => {
        console.log("Respuesta login",response);
        if(response.token){
          sessionStorage.setItem('token',response.token);
        }
        
      },
      (error)=>{
        console.error(`Ha ocurrido un error ${error}`)
      },
      ()=>{
        console.info('Se ha completado la llamada de login a REQRES')
      }
    )
   */   
  }

}
