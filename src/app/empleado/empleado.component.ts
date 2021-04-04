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
  empresa = "Super Empresa";
  //empresa = "Medilinky"

  getNombre() {
    return this.nombre;
  }
  getApellido() {
    return this.apellido;
  }
  getEdad() {
    return this.edad;
  }
  getEmpresa() {
    return this.empresa;
  }

  llamaEmpresa(empresa: string) {

  }

  /* propiedades para binding */
  private activadoProperty = false;
  private registrado = false;


  getRegistrado() {
    return this.registrado;
  }
  getActivadoProperty() {
    return this.activadoProperty;
  }
  /* ----------- Event Binding ------------------  */
  textodeRegistro = "no hay nadie registrado";

  evento() {
    this.textodeRegistro = "Usuario Registrado";
  }

  radioRegistro = "";
  setUsuarioRegistro(event: Event) {
    //alert(event.target);
    if ((<HTMLInputElement>event.target).value == "Si") {  //casting del input
      this.radioRegistro = "El usuario SI se registra";
    } else {
      this.radioRegistro = "El usuario NO se registra";
    }
  }

  // ****** Directivas **********

  mostrar: boolean = false;
  cambiarDirectiva() {
    if (this.mostrar) {
      this.mostrar = false;
    } else {
      this.mostrar = true;
    }
  }


  constructor() { }
  ngOnInit(): void {
  }

}
