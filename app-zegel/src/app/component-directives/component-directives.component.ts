import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-directives',
  imports: [CommonModule],
  templateUrl: './component-directives.component.html',
  styleUrl: './component-directives.component.css'
})
export class ComponentDirectivesComponent {
  mostrarElemento = true;

  listaItems = ['Item 1', 'Item 2', 'Item 3'];

  estado = 'activo';
}
