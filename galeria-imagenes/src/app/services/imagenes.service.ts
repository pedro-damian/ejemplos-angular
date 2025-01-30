import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ImagenesService {
  private imagenes = [
    {
      id: 1,
      url: "https://picsum.photos/400/300?random=1", // muestra una imagen aleatoria
      titulo: "Imagen 1",
      descripcion: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ",
    },
    {
      id: 2,
      url: "https://picsum.photos/400/300?random=2", // muestra una imagen aleatoria
      titulo: "Imagen 2",
      descripcion: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
    },
    {
      id: 3,
      url: "https://picsum.photos/400/300?random=3", // muestra una imagen aleatoria
      titulo: "Imagen 3",
      descripcion: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
    },
    {
      id: 4,
      url: "https://picsum.photos/400/300?random=4", // muestra una imagen aleatoria
      titulo: "Imagen 4",
      descripcion: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
    },
    {
      id: 5,
      url: "https://picsum.photos/400/300?random=5", // muestra una imagen aleatoria
      titulo: "Imagen 5",
      descripcion: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
    },
    {
      id: 6,
      url: "https://picsum.photos/400/300?random=6", // muestra una imagen aleatoria
      titulo: "Imagen 6",
      descripcion: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem",
    },
  ];
  getImagenes() {
    return this.imagenes;
  }
}
