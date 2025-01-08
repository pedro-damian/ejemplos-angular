import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  imports: [CommonModule],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {

  tareas = [
    {descripcion: 'aprender angular', prioridad: 'alta', completada: false },
    {descripcion: 'hacer ejercicio', prioridad: 'media', completada: true },
    {descripcion: 'leer libro', prioridad: 'baja', completada: false },
  ];

  cambiarEstado(tarea: any){
    tarea.completada = !tarea.completada
  }
}
