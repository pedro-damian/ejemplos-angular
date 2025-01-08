import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-nombres',
  imports: [CommonModule],
  templateUrl: './lista-nombres.component.html',
  styleUrl: './lista-nombres.component.css'
})
export class ListaNombresComponent {
  nombres = [
    "Pedro", "Miguel", "Juan", "Javier", "Maria", "Luna"
  ];

  cambiarEstado(tarea: any){
    tarea.completada = !tarea.completada
  }
}
