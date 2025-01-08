import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { ListaNombresComponent } from "./lista-nombres/lista-nombres.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaNombresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo4';
}
