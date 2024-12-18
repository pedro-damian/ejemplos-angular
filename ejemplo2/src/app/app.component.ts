import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { MiComponente2Component } from './mi-componente2/mi-componente2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MiComponenteComponent, MiComponente2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo2';
}
