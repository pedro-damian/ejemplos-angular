import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';
import { ZegelComponent } from './zegel/zegel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ZegelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo1';
}
