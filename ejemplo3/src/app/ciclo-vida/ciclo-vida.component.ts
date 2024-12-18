import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  imports: [],
  templateUrl: './ciclo-vida.component.html',
  styleUrl: './ciclo-vida.component.css'
})
export class CicloVidaComponent implements OnInit, OnDestroy{
  constructor(){
    console.log('El componente se esta creando');
  }
  ngOnInit(): void {
    console.log('se ha inicializado')
  }

  ngOnDestroy(): void {
    console.log('el componente se ha destruido')
  }
  
}
