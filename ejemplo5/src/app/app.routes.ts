import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'about', component: AboutComponent },
  {path:'contact', component: ContactComponent },
  {path:'**', redirectTo:'' } // en caso no exista la ruta redirige a inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes{}