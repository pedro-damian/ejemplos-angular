import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-noticias",
  imports: [CommonModule],
  templateUrl: "./noticias.component.html",
  styleUrl: "./noticias.component.css",
})
export class NoticiasComponent {
  mostrar: boolean = false;
  noticias = [
    {
      titulo: "La NASA anuncia nuevo descubrimiento en Marte",
      contenido:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      mostrar: false,
    },
    {
      titulo: "Avances revolucionarios en energía renovable",
      contenido:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      mostrar: false,
    },
    {
      titulo: "Descubren nueva especie en el Amazonas",
      contenido:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      mostrar: false,
    },
    {
      titulo: "Avance significativo en la lucha contra el Alzheimer",
      contenido:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      mostrar: false,
    },
    {
      titulo: "Innovación en tecnología cuántica",
      contenido:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      mostrar: false,
    },
  ];

  mostrarContenido(i: number) {
    this.noticias[i].mostrar = !this.noticias[i].mostrar;
  }
}
