import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { EstudiantesService } from "../../services/estudiantes.service";

@Component({
  selector: "app-tabla-estudiantes",
  imports: [CommonModule, FormsModule],
  templateUrl: "./tabla-estudiantes.component.html",
  styleUrl: "./tabla-estudiantes.component.css",
})
export class TablaEstudiantesComponent implements OnInit {
  estudiantes: any[] = [];
  filtroNombre: string = "";
  estudiantesFiltrados: any[] = [];
  constructor(private estudiantesService: EstudiantesService) {}

  ngOnInit(): void {
    this.estudiantesService.getEstudiantes().subscribe((data) => {
      this.estudiantes = data;
      this.filtrarEstudiantes();
    });
  }

  filtrarEstudiantes(): void {
    this.estudiantesFiltrados = this.estudiantes.filter((estudiante) =>
      estudiante.name.toLowerCase().includes(this.filtroNombre.toLowerCase()),
    );
  }
}
