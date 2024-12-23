import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-producto",
  imports: [],
  templateUrl: "./producto.component.html",
  styleUrl: "./producto.component.css",
})
export class ProductoComponent implements OnInit, OnDestroy {
  producto = {
    nombre: "Pixel 7 | 8GB 128BG",
    precio: "S/ 2.500",
    descripcion:
      "Pixel 8 es el teléfono diseñado por Google, sus caracteristicas principales son su camara trasera de 50MP+48MP+48MP, Bateria 5050mAh",
    imagen: "images/pixel-8.webp",
    disponible: true,
  };

  constructor() {
    console.log("El componente se esta creando");
  }

  ngOnInit() {
    console.log("Componente inicializado");
  }

  ngOnDestroy() {
    console.log("Componente destruido");
  }

  toggleDisponibilidad() {
    this.producto.disponible = !this.producto.disponible;
  }
}
