import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';

import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HttpClientModule } from '@angular/common/http';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ButtonComponent } from './components/button/button.component';

import { FooterComponent } from './components/footer/footer.component';

import { BannerComponent } from './components/banner/banner.component';

import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';



;

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    
    ExperienciaComponent,
    SkillsComponent,
    EducacionComponent,
    ProyectosComponent,
    EncabezadoComponent,
    ButtonComponent,
  
    FooterComponent,
 
    BannerComponent,

    AcercaDeComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
