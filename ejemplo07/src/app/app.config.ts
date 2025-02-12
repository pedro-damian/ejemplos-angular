import {
  ApplicationConfig,
  Component,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter, Routes } from "@angular/router";

//import { routes } from './app.routes';
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
