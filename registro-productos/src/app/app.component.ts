import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ListaProductosComponent } from "./components/lista-productos/lista-productos.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, CommonModule, ListaProductosComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  mostrarLista = false;

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }
}
