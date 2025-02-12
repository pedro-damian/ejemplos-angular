import { Component } from "@angular/core";
import { interval, scan, startWith, Subject, switchMap, takeUntil } from "rxjs";

@Component({
  selector: "app-temporizador",
  imports: [],
  templateUrl: "./temporizador.component.html",
  styleUrl: "./temporizador.component.css",
})
export class TemporizadorComponent {
  counter$ = new Subject<boolean>(); // controla el inicio y pausa del contador
  stop$ = new Subject<void>(); // controla el reinicio del contador
  value = 10; // inicializa el valor del contador en 20
  pausa = false;

  constructor() {
    this.counter$
      .pipe(
        // operadores rxjs
        startWith(false),
        switchMap((isRunning) =>
          isRunning
            ? interval(1000).pipe(
                scan((acc) => acc - 1, this.value),
                takeUntil(this.stop$),
              )
            : [],
        ),
      )
      // .subscribe((val) => (this.value = val));
      .subscribe((val) => {
        this.value = val;
        // Detener el temporizador cuando llega a 0

        if (this.value <= 0) {
          this.stop$.next();
        }
      });
  }

  // interruptor iniciar y pausar contador
  toggleCounter() {
    this.counter$.next((this.pausa = !this.pausa));
  }

  // reinicia el contador
  resetCounter() {
    this.stop$.next();
    this.value = 10;
  }
}
