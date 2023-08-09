import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.css']
})
export class ContactDetailPageComponent implements OnInit{

  id: any | undefined;
  contacto:IContacto={
    id:0,
    nombre:'',
    apellido:'',
    email:'',
    sexo:''
  };

  filtroPrevio:string = 'todos';

  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {

    this.route.params.subscribe(
      (params:any)=>{
        if(params.id){
          this.id = params.id;
        }
      }
    );

    //vamos a leer tambien del State el contacto
      if(history.state.datos){
        this.contacto = history.state.datos;
      }

      if(history.state.filtro){
        this.filtroPrevio = history.state.filtro;
      }
    

      
  }

}
