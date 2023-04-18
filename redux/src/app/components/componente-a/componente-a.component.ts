import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { establecerNombre } from 'src/app/state/nombre/nombre.actions';
import { NombreState } from 'src/app/state/nombre/nombre.state';

@Component({
  selector: 'componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent {

  constructor(private store: Store<{ nombre: NombreState } >) {} // Hacemos uso de la inyección de dependencias de Angular

  establecerNombre(nombre: string) {
    console.log("Se establece el nombre:", nombre);
    // Solicitar que se ejecute una acción de tipo "establecerNombre", con los datos: {nombre: nombre}
    // Eso se lo vamos a pedir al store
    this.store.dispatch(establecerNombre( { nombre: nombre } ))
  }

}
