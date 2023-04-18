import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidations, validacionTelefono, validacionTelefono2 } from './validations/custom.validations';

@Component({
  selector: 'new-user-form',
  templateUrl: './newuserform.component.html',
  styleUrls: ['./newuserform.component.css']
})
export class NewUserFormComponent implements OnInit{

  // formBuilder
  constructor(private constructorDeFormularios: FormBuilder){}
  direcciones!: FormArray
  formulario!: FormGroup

/*
  CREACION DE FORMULARIO A TRAVES DE FORM GROUP
  ngOnInit(): void {
    // Cargar un objeto desde un servicio
    this.formulario = new FormGroup({
      nombre:     new FormControl('Nombre', Validators.required), // Usar los valores del objeto como valores por defecto
      apellidos:  new FormControl('Apellidos', Validators.required),
      email:      new FormControl('email@dominio.com', [Validators.required, Validators.email]),
      //telefono:   new FormControl('987654321', [Validators.pattern("^[+]?[0-9-]+$"),CustomValidations.telefono]),
      telefono:   new FormControl('987654321', CustomValidations.telefono),
      //telefono:   new FormControl('987654321', validacionTelefono),
      //telefono:   new FormControl('987654321', validacionTelefono2),
      foto:       new FormControl('la que sea'),
      edad:       new FormControl(44, [Validators.min(0),Validators.max(150)]),
      permiso:    new FormControl('no'),
      coche:      new FormControl(true),
      genero:     new FormControl(),
      direcciones: new FormArray([])
    })
  }
*/

  // CREACION DE UN FORMULARIO A TRAVES DEL FORM BUILDER
  ngOnInit(): void {
    this.direcciones = this.constructorDeFormularios.array([])
    // Cargar un objeto desde un servicio
    this.formulario = this.constructorDeFormularios.group({
      nombre:     ['Nombre', Validators.required],
      apellidos:  'Apellidos',
      email:      'email@dominio.com',
      telefono:   ['987654321', CustomValidations.telefono], 
      foto:       'la que sea',
      edad:       44, 
      permiso:    'no',
      coche:      true,
      genero:     '',
      direcciones: this.direcciones
    })
  }

  nuevaDireccion(){
    let direccion = this.constructorDeFormularios.group({
      via:     '',
      numero:  '',
      poblacion: '',
    })
    this.direcciones.push(direccion)
  }

  nuevoUsuario(){
    if(this.formulario.valid){
      console.log(this.formulario.value)
      // Llamariamos al servicio para darlo de alta
    }
  }
}
