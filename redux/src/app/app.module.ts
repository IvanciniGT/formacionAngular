import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { ComponenteAComponent } from './components/componente-a/componente-a.component';
import { ComponenteBComponent } from './components/componente-b/componente-b.component';
import { MiAppStore } from './state/miapp.store';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes =[
  {path: '', component: AppComponent},
//  {path: '/ayuda', component: AyudaComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    ComponenteAComponent,
    ComponenteBComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
                        // AQUI SUMINISTRAMOS LA LISTA DE REDUCTORES
                        // Cada Reducer va a tener un nombre asociado.
                        // Ese nombre... TODO: Ver ese nombre
    MiAppStore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
