import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  private nombre = "Juan";
  private apellido = "Diaz";
  private edad = 23;
  //private empresa = "Super Empresa";


  getNombre() {
    return this.nombre;
  }
  getApellido() {
    return this.apellido;
  }
  getEdad() {
    return this.edad;
  }

  llamaEmpresa(empresa:string){

  }

/* propiedades para binding */
  private activadoProperty=true;
  private registrado = false;


getRegistrado(){
  return this.registrado;
}
getActivadoProperty(){
  return this.activadoProperty;
}

  constructor() { }
  ngOnInit(): void {
  }

}
