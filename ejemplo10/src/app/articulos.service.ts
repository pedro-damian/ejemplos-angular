import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url = 'https://localhost/prueba';


  constructor(private http: HttpClient) { }

  recuperarTodo(){
    return this.http.get(`${this.url}recuperarTodo.php`)
  }

  alta(articulo:any){
    return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo))
  }

  baja(codigo:number){
    return this.http.get(`${this.url}baja.php?codigo=${codigo}`)
  }

  seleccionar(codigo:number){
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`)
  }

  modificacion(articulo:any){
    return this.http.post(`${this.url}modificacion.php`, JSON.stringify(articulo))
  }

}
