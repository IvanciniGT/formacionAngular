import { Component } from '@angular/core';

@Component({
  selector: 'componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent {

  establecerNombre(nombre: string) {
    throw new Error('Method not implemented.');
  }

}
