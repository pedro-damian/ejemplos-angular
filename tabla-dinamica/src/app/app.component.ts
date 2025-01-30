import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TablaEstudiantesComponent } from "./components/tabla-estudiantes/tabla-estudiantes.component";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    TablaEstudiantesComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "tabla-dinamica";
}
