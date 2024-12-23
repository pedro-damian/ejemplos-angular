import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CicloVidaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo3';
  mostrar = true;
}
