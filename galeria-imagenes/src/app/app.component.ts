import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { GaleriaImagenesComponent } from "./components/galeria-imagenes/galeria-imagenes.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, CommonModule, GaleriaImagenesComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "galeria-imagenes";
}
