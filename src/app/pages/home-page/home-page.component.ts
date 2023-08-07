import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  contactoSeleccionado:IContacto | undefined;
  token:string|null=null;

  constructor(private router:Router){

  }

  navegarContacts(): void{

    let navigationExtras:NavigationExtras = {
      queryParams: {
        sexo:'todos'
      }
    }

    this.router.navigate(['contacts'],navigationExtras);
  }

  ngOnInit(): void {
    //Comprobar si existe el token en el sessionStorage
    if(sessionStorage.getItem('token')){
      this.token = sessionStorage.getItem('token');
    }
    

      //Leemos del estado del historial de navegacion
      if(history.state.data){
        console.log(history.state.data);
        this.contactoSeleccionado = history.state.data;
      }
      
  }

}
