import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private baseUrl = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {}
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users`);
  }

  // Método para obtener todos los posts
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/posts`);
  }

  // Método para obtener posts de un usuario específico
  getPostsByUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users/${userId}/posts`);
  }
}
