import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  personas:Persona[]=[
    new Persona("Ken", "Luzuriaga"),
     new Persona("Laura", "Suarez")
    ];

    nombreInput:string="";
    apellidoInput:string="";
    agregarPersona(){
      let persona1 = new Persona(this.nombreInput,this.apellidoInput);
      this.personas.push(persona1);

    }
  }
