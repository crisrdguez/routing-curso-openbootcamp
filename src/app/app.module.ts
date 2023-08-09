import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import {MatFormFieldModule} from '@angular/material/form-field';//Modulos Material Angular
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';
import { MaterialModule } from './modules/material/material.module';
//locale para pipes
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs); //Registramos el LOCALE_ID de 'es' para poder usarlo en los pipes


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ContactDetailPageComponent,
    ContactsComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalcularPuntuacionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //Importamos el modulo HttpClientModule para hacer peticiones HTTP
    HttpClientModule,
    //Importamos ReactiveModule para trabajar con formularios reactivos
    ReactiveFormsModule,
    //Importamos los modulos de Angular Material que usamos con los formularios
    MatFormFieldModule,
    MatInputModule, 
    MatIconModule,
    //Material Modulo
    MaterialModule,
    BrowserAnimationsModule

  ],
  providers: [
    //Registramos el locale de ES para que los pipes salgan en español
    {provide:LOCALE_ID, useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
