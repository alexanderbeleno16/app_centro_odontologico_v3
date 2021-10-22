import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PieComponent } from './componentes/pie/pie.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { Section1Component } from './componentes/section1/section1.component';
import { Section2Component } from './componentes/section2/section2.component';
import { Section3Component } from './componentes/section3/section3.component';
import { Section4Component } from './componentes/section4/section4.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { Section5Component } from './componentes/section5/section5.component';
import { Section6Component } from './componentes/section6/section6.component';
import { Section7Component } from './componentes/section7/section7.component';
import { Section8Component } from './componentes/section8/section8.component';
import { SectionFormContactComponent } from './componentes/section-form-contact/section-form-contact.component';
import { TablasComponent } from './paginas/tablas/tablas.component';
import { SectionTablasComponent } from './componentes/section-tablas/section-tablas.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ContactoComponent,
    NosotrosComponent,
    EncabezadoComponent,
    PieComponent,
    BannerComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    ServiciosComponent,
    Section5Component,
    Section6Component,
    Section7Component,
    Section8Component,
    SectionFormContactComponent,
    TablasComponent,
    SectionTablasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
