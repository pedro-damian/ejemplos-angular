import { Component, OnInit } from "@angular/core";
import { ImagenesService } from "../../services/imagenes.service";

@Component({
  selector: "app-galeria-imagenes",
  imports: [],
  templateUrl: "./galeria-imagenes.component.html",
  styleUrl: "./galeria-imagenes.component.css",
})
export class GaleriaImagenesComponent implements OnInit {
  imagenes: any[] = [];
  imagenSeleccionada: any = null;

  constructor(private imagenesService: ImagenesService) {}

  ngOnInit(): void {
    this.imagenes = this.imagenesService.getImagenes();
  }

  abrirModal(imagen: any): void {
    this.imagenSeleccionada = imagen;
  }

  cerrarModal(): void {
    this.imagenSeleccionada = null;
  }
}
