import { Component, OnInit } from '@angular/core';
import { IContacto } from 'src/app/models/contact.interface';
import { IJugador } from 'src/app/models/jugador.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.css']
})
export class EjemploPipesComponent implements OnInit{

  dob:Date = new Date(1988,9,14); //date of birthday
  cambio:boolean=true;
  nombre:string ="Cristina";
  numerito:number=32.142343434;

  //Moneda
  precioCarrito:number=100;

  //Objeto
  dyka:IContacto = {
    id:12,
    nombre:'Estefania',
    apellido:'Calderon',
    email:'ec@email.com',
    sexo:'mujer'
  }

  cantidad:number=0.35;
  texto:string="lfjksdjfkdjfksjf  hsdfh sfhkdf dfhkafahjksf afjakfj a";

  //Ejemplo para pipe calcular puntuacion
  jugador1:IJugador={
    nombre:"Martin",
    puntos:[30,20,40,2]
  }

  jugador2:IJugador={
    nombre:"Pedrin",
    puntos:[50,20,40,2]
  }

  jugador3:IJugador={
    nombre:"Juanin",
    puntos:[60,20,40,2]
  }

  constructor(){}

  ngOnInit(): void {
      
  }

  get dateFormat(){
    return this.cambio ? 'shortDate' : 'fullDate';
  }

  cambiarFormato(){
    this.cambio = !this.cambio;
  }

}
