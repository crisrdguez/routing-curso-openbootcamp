import { Component, OnInit } from '@angular/core';
//Ejemplo basico de formulario Validado
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.css']
})
export class FormularioValidadoComponent implements OnInit{

  //Definimos el formulario
 miFormularioValidado:FormGroup = new FormGroup({});

 constructor(private formbuilder:FormBuilder){}

  ngOnInit(): void {

    this.miFormularioValidado = this.formbuilder.group(
      {
        nombre:['', Validators.required], //Campo obligatorio
        apellidos:'',
        //Campo obligatorio con valores minimos y maximos, hay muchos validadores
        edad:['',Validators.compose([Validators.required, Validators.min(18), Validators.max(100)])],
        //Campo obligatorio y de tipo email
        email:['',Validators.compose([Validators.required, Validators.email])],
        //Campo obligatorio y con expresion regular
        password:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]*')])],
        //Campo booleano con true como obligatorio
        acepta:[false, Validators.requiredTrue]//se utiliza en checkbox
      }
    )
      
  }

  //Es necesario generar los getter y setter
  get nombre(){
    return this.miFormularioValidado.get('nombre');
  }

  get apellidos(){
    return this.miFormularioValidado.get('apellidos');
  }

  get edad(){
    return this.miFormularioValidado.get('edad');
  }

  get email(){
    return this.miFormularioValidado.get('email');
  }

  get password(){
    return this.miFormularioValidado.get('password');
  }

  get acepta(){
    return this.miFormularioValidado.get('acepta');
  }

  //Metodo submit del formulario
  enviarFormulario(){
    //Controlar que el formulario sea valido y realizar un tipo de accion
    if(this.miFormularioValidado.valid){
      console.table(this.miFormularioValidado);
      //Reseteamos los campos del formulario
      this.miFormularioValidado.reset();
    }

  }

}
