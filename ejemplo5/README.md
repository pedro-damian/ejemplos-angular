# Ejemplo5



### Pasos para crear el proyecto
- ng new ejemplo5
- cd ejemplo5

### Pasos para crear los Componentes
- ng g c home
- ng g c about
- ng g c contact

### Configurar el app-routes.ts

```bash
export const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'about', component: AboutComponent },
  {path:'contact', component: ContactComponent },
  {path:'**', redirectTo:'' } // en caso no exista redirige a inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes{}
```

### Agregar Las Rutas en el app.component.html
```bash
<nav>
  <a routerLink="/" routerLinkActive="active" >Home</a>
  <a routerLink="/about" routerLinkActive="active" >About</a>
  <a routerLink="/contact" routerLinkActive="active" >Contact</a>
</nav>

<router-outlet />
```

### Importar el modulo RouterLink en el app.component.ts
```bash
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```


### Iniciar Proyecto
```bash
ng serve
```

