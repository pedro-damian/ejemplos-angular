import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { interval, scan, startWith, Subject, switchMap, takeUntil } from "rxjs";

@Component({
  selector: "app-counter",
  imports: [CommonModule],
  templateUrl: "./counter.component.html",
  styleUrl: "./counter.component.css",
})
export class CounterComponent {
  counter$ = new Subject<boolean>(); // controla el inicio y pausa del contador
  stop$ = new Subject<void>(); // controla el reinicio del contador
  value = 0; // inicializa el valor del contador en 0
  pausa = false;

  constructor() {
    this.counter$
      .pipe(
        // operadores rxjs
        startWith(false),
        switchMap((isRunning) =>
          isRunning
            ? interval(1000).pipe(
                scan((acc) => acc + 1, this.value),
                takeUntil(this.stop$),
              )
            : [],
        ),
      )
      .subscribe((val) => (this.value = val)); //
  }

  // interruptor iniciar y pausar contador
  toggleCounter() {
    this.counter$.next((this.pausa = !this.pausa));
  }

  // reinicia el contador
  resetCounter() {
    this.stop$.next();
    this.value = 0;
  }
}
