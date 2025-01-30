import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductosService {
  private productos = [
    { id: 1, nombre: "Laptop", precio: 3500, cantidad: 5 },
    { id: 2, nombre: "Mouse", precio: 105, cantidad: 10 },
    { id: 3, nombre: "Teclado", precio: 210, cantidad: 8 },
    { id: 4, nombre: "Monitor", precio: 450, cantidad: 3 },
    { id: 5, nombre: "Impresora", precio: 500, cantidad: 2 },
    { id: 6, nombre: "Escritorio", precio: 300, cantidad: 4 },
    { id: 7, nombre: "Silla", precio: 150, cantidad: 6 },
    { id: 8, nombre: "Camara", precio: 250, cantidad: 7 },
    { id: 9, nombre: "Altavoces", precio: 180, cantidad: 9 },
    { id: 10, nombre: "Microfono", precio: 120, cantidad: 11 },
  ];

  constructor() {}
  getProductos() {
    return this.productos;
  }
}
