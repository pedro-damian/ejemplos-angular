import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

@Component({
  selector: "app-lista-tareas",
  imports: [CommonModule, FormsModule],
  templateUrl: "./lista-tareas.component.html",
  styleUrl: "./lista-tareas.component.css",
})
export class ListaTareasComponent {
  tareas: Tarea[] = [];
  nuevaTarea: string = "";

  agregarTarea(): void {
    if (this.nuevaTarea.trim()) {
      const tarea: Tarea = {
        id: Date.now(),
        texto: this.nuevaTarea,
        completada: false,
      };
      this.tareas.unshift(tarea); // Agregar al inicio de la lista
      this.nuevaTarea = "";
    }
  }

  toggleCompletada(tarea: Tarea): void {
    tarea.completada = !tarea.completada;
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
  }
}
