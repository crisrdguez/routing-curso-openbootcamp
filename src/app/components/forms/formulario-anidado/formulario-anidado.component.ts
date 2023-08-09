import { Component, OnInit } from '@angular/core';

//Ejemplo basico de formulario anidado
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.css']
})
export class FormularioAnidadoComponent implements OnInit{

  //Definimos el formulario
  miFormularioAnidado:FormGroup = new FormGroup({});

  constructor(private formbuilder:FormBuilder){}

  ngOnInit():void{

    //Agrupacion para telefonos
    const telefonoFijo = this.formbuilder.group(
      {
        prefijo:'',
        numero:''
      }
    );

    const telefonoMovil = this.formbuilder.group(
      {
        prefijo:'',
        numero:''
      }
    );

    //Agrupacion del formulario que contiene dos agrupaciones
    this.miFormularioAnidado = this.formbuilder.group(
      {
        telefonoFijo:telefonoFijo,
        telefonoMovil:telefonoMovil
      }
    );

  }

}
