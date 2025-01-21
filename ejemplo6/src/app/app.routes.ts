import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path:'', component: InicioComponent },
  {path:'noticias', component: NoticiasComponent },
  {path:'contacto', component: ContactoComponent },
  {path:'nosotros', component: NosotrosComponent },
  {path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes{}