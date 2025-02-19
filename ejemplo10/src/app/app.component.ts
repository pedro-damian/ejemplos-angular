import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo10';

  articulos:any;

  art = {
    codigo: 0,
    descripcion: '',
    precio: 0
  }

  constructor(private articulosServicio: ArticulosService){
    this.recuperarTodo();
  }

  recuperarTodo(){
    this.articulosServicio.recuperarTodo().subscribe((result:any) => this.articulos = result);
  }

  alta(){
    this.articulosServicio.alta(this.art).subscribe((datos:any) =>{
      if(datos['resultado'] == 'OK'){
        alert(datos['mensaje']);
        this.recuperarTodo();
      }
    })
  }

  baja(codigo:number){
    this.articulosServicio.baja(codigo).subscribe((datos:any) =>{
      if(datos['resultado'] == 'OK'){
        alert(datos['mensaje']);
        this.recuperarTodo();
      }
    })
  }


  modificacion(){
    this.articulosServicio.modificacion(this.art).subscribe((datos:any) =>{
      if(datos['resultado'] == 'OK'){
        alert(datos['mensaje']);
        this.recuperarTodo();
      }
    })
  }

  seleccionar(codigo:number){
    this.articulosServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
  }

}
