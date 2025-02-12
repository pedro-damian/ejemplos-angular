import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

//export const routes: Routes = [
export const routes = [
  {
    declarations: [AppComponent],
    import: [BrowserModule, FormsModule],
    bootstrap: [AppComponent],
  },
];
