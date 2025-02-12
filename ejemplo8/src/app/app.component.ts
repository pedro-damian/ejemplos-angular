import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { TemporizadorComponent } from "./components/temporizador/temporizador.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BuscadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo8';
}
