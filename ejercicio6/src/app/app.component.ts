import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { UserListComponent } from "./components/user-list/user-list.component";
import { CommonModule } from "@angular/common";
import { UserPostComponent } from "./components/user-post/user-post.component";

@Component({
  selector: "app-root",
  //imports: [RouterOutlet, UserListComponent, CommonModule, UserPostComponent],
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "ejercicio6";
}
