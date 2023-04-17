import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'new-user-form',
  templateUrl: './newuserform.component.html',
  styleUrls: ['./newuserform.component.css']
})
export class NewUserFormComponent implements OnInit{

  formulario!: FormGroup

  ngOnInit(): void {
    // Cargar un objeto desde un servicio
    this.formulario = new FormGroup({
      nombre:     new FormControl('Nombre', Validators.required), // Usar los valores del objeto como valores por defecto
      apellidos:  new FormControl('Apellidos', Validators.required),
      email:      new FormControl('email@dominio.com', [Validators.required, Validators.email]),
      telefono:   new FormControl('987654321'),
      foto:       new FormControl('la que sea'),
      edad:       new FormControl(44, [Validators.min(0),Validators.max(150)])
    })
  }

  nuevoUsuario(){
    if(this.formulario.valid){
      console.log(this.formulario.value)
      // Llamariamos al servicio para darlo de alta
    }
  }
}
