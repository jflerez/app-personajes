import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajeComponent } from "./personaje/personaje.component";
import { PersonajesComponent } from "./personajes/personajes.component";
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [PersonajeComponent,PersonajesComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PersonajesComponent
  ]
})
export class ComponentsModule { }
