import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { NombreState } from 'src/app/state/nombre/nombre.state';

@Component({
  selector: 'componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit{

  nombre$: Observable<String|null> = of(null); // Que este dato se saca de donde ? Del estado global: state.nombre.nombre

  constructor(private store: Store< { nombre: NombreState } >) { // Hacemos uso de la inyección de dependencias de Angular
  } 

  ngOnInit(): void {
    this.nombre$ = this.store.select(  // genera un observable
      // del estado     // Que datos quiero observar
      estado        =>  {
                          console.log(estado)
                          return estado.nombre.nombre
                        }
      )
  }


}
