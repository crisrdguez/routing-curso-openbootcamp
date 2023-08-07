import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'login', component:LoginPageComponent},
  {path:'home', component:HomePageComponent,
    children:[
      {path:'hijo',component:HomePageComponent} //podriamos poner otro component
    ],
    canActivate: [authGuard] //para que no nos deje ir al home si no nos logueamos
  },
  {path:'contacts',component:ContactsComponent,
    canActivate: [authGuard]
},
  {path:'contacts/:id',component:ContactDetailPageComponent,
  canActivate: [authGuard]
},
  {path:'**',component:NotFoundPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
