import { Component, OnInit } from '@angular/core';
//Ejemplo basico de formulario con array
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.css']
})
export class FormularioArrayComponent implements OnInit{

 //Definimos el formulario
 miFormularioArray:FormGroup = new FormGroup({});

 constructor(private formbuilder:FormBuilder){}

  ngOnInit(): void {
    this.miFormularioArray = this.formbuilder.group(
    {
      nombre:'',
      apellidos:'',
      telefonos:this.formbuilder.array([]) //Inicializamos la lista de telefonos vacía
    }
  )
      
  }

  //Metodo getter para obtener el Formarray de la lista de telefonos
  get telefonosFormulario():FormArray{
    return this.miFormularioArray.get('telefonos') as FormArray
  }

  //Metodos para añadir Telefonos a la lista
  insertTelefono(){

    //Creamos un grupo telefono
    const telefonoNuevo = this.formbuilder.group(
      {
        prefijo:'',
        numero:''
      }
    );

    //Añadimos el grupo a la lista de telefonos
    this.telefonosFormulario.push(telefonoNuevo);

  }

  //Metodo para eliminar telefonos de la lista
  eliminarTelefono(index:number){
    this.telefonosFormulario.removeAt(index);
  }

}
