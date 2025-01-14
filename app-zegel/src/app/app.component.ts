import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentDirectivesComponent } from './component-directives/component-directives.component';
import { ComponentPipesComponent } from './component-pipes/component-pipes.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentDirectivesComponent, ComponentPipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-zegel';
}
