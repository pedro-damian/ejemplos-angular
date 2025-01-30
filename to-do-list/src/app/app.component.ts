import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ListaTareasComponent } from "./components/lista-tareas/lista-tareas.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, CommonModule, ListaTareasComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "to-do-list";
}
