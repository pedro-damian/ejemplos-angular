import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-pipes',
  imports: [CommonModule],
  templateUrl: './component-pipes.component.html',
  styleUrl: './component-pipes.component.css'
})
export class ComponentPipesComponent {
  precio = 1234.5678;
  fecha = new Date();
  numeroDecimal = 3.14159265359;
  porcentaje = 0.75;
}
