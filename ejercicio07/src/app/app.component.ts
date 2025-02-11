import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  productName: string = "";
  productPrice: number | null = null;
  productCategory: string = "electronica"; // Valor por defecto
  productStock: boolean = false;

  submittedProduct: any = null;

  categories: string[] = ["electronica", "ropa", "alimentos"];

  onSubmit() {
    if (this.productName && this.productPrice !== null) {
      this.submittedProduct = {
        name: this.productName,
        price: this.productPrice,
        category: this.productCategory,
        stock: this.productStock,
      };

      // Limpiar el formulario
      this.productName = "";
      this.productPrice = null;
      this.productCategory = "electronica";
      this.productStock = false;
    } else {
      alert("Por favor, completa todos los campos requeridos.");
    }
  }
}
