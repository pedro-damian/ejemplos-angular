import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: "app-lista-productos",
  imports: [CommonModule],
  templateUrl: "./lista-productos.component.html",
  styleUrl: "./lista-productos.component.css",
})
export class ListaProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productos = this.productosService.getProductos();
  }
}
