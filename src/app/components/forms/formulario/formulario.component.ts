import { Component, OnInit } from '@angular/core';

//Ejemplo basico de formulario reactivo
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  //Definimos el formulario
  miFormulario:FormGroup = new FormGroup({});

  //Inyectamos la clase FormBuilder para construir el formulario
  constructor(private formbuilder:FormBuilder){}

  ngOnInit(): void {

    //Iniciamos los campos del formulario y sus valores por defecto
    this.miFormulario = this.formbuilder.group(
      {
        nombre:'',
        apellidos:'',
        email:'',
        telefono:'',
        direccion:''
      }
    );

    //Nos subscribimos a los cambios que ocurran en el formulario y lo vamos a ver por consola
    this.miFormulario.valueChanges.subscribe(console.log); 

    //Es lo mismo que esto:
    //this.miFormulario.valueChanges.subscribe((valor)=>{console.log(valor)}); 
      
  }

}
