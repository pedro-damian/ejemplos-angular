import { Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente2',
  imports: [],
  templateUrl: './mi-componente2.component.html',
  styleUrl: './mi-componente2.component.css'
})
export class MiComponente2Component {
  habilitado: boolean = true;

  toggleHabilitado(): void{
    this.habilitado = !this.habilitado;
  }
}
