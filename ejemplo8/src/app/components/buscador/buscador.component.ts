import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-buscador",
  imports: [FormsModule, CommonModule],
  templateUrl: "./buscador.component.html",
  styleUrl: "./buscador.component.css",
})
export class BuscadorComponent {
  usuarios: string[] = [
    // Array de nombres de usuarios
    "Juan Pérez",
    "María García",
    "Carlos López",
    "Ana Rodríguez",
    "Pedro Martínez",
    "Laura Sánchez",
    "Diego Fernández",
    "Sofía González",
    "Javier Ruiz",
    "Isabela Díaz",
  ];

  busqueda: string = ""; // Texto del input de búsqueda
  resultados: string[] = []; // Array de resultados filtrados

  buscar(): void {
    this.resultados = this.usuarios.filter((usuario) =>
      usuario.toLowerCase().includes(this.busqueda.toLowerCase()),
    );
  }

  limpiarBusqueda(): void {
    this.busqueda = "";
    this.resultados = [];
  }
}
