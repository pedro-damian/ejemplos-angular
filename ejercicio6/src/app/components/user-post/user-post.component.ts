import { Component } from "@angular/core";
import { DataService } from "../../services/data.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-user-post",
  imports: [CommonModule],
  templateUrl: "./user-post.component.html",
  styleUrl: "./user-post.component.css",
})
export class UserPostComponent {
  posts: any[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  // Obtener todos los posts
  loadPosts() {
    this.dataService.getPosts().subscribe(
      (data: any) => {
        this.posts = data;
      },
      (error: any) => {
        console.error("Error al obtener usuarios:", error);
      },
    );
  }

  // Obtener posts de un usuario específico
  loadUserPosts(userId: number) {
    this.dataService.getPostsByUser(userId).subscribe(
      (posts) => {
        console.log(posts);
        // Manejar los posts del usuario
      },
      (error) => {
        console.error("Error al cargar posts del usuario:", error);
      },
    );
  }
}
