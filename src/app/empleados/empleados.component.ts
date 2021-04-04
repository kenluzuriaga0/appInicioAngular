import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  sumar(): void {
    this.resultado = this.numero1 + this.numero2
  }

  restar(): void {
    this.resultado = this.numero1 - this.numero2
  }

  constructor() { }

  ngOnInit(): void {
  }

}
