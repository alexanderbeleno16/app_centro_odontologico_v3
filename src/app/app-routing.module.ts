import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { TablasComponent } from './paginas/tablas/tablas.component';

/////////////////////////////////////////////////////////////
const routes: Routes = [
  {path: 'principal',component:PrincipalComponent},
  {path: 'nosotros',component:NosotrosComponent},
  {path: 'servicios',component:ServiciosComponent},
  {path: 'contacto',component:ContactoComponent},
  {path: 'tablas',component:TablasComponent},
  {path: '' ,redirectTo: 'principal', pathMatch:'full'}
];
/////////////////////////////////////////////////////////////
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
