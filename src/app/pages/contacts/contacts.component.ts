import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{

  listaContactos:IContacto[] = [];
  filtroSexo:string='todos';

  constructor(private router:Router, private route:ActivatedRoute, private contactService: ContactService ){

  }

  //Ejemplo de paso de info entre componentes a traves del estado
  volverHome(contacto:IContacto){

    let navigationExtras: NavigationExtras = {
      state:{
        data:contacto
      }
    }

    this.router.navigate(['/home'],navigationExtras);
  }

  salirLogin(){
    sessionStorage.removeItem('token');
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
      //Obtenemos los queryparams
      this.route.queryParams.subscribe((params:any)=>{
        console.log(params.sexo);
        if(params.sexo){
          this.filtroSexo = params.sexo;
        }
        

        //Obtener la lista de contactos
        this.contactService.obtenerContactos(this.filtroSexo)
        .then((lista)=>{this.listaContactos = lista})
        .catch((error)=>console.error(`Ha habido un error al obtener los contactos ${error}`))
        .finally(()=>console.info('Peticion de contactos terminada'))

      })

      
  }

}
