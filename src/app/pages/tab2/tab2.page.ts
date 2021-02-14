import { Component, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Personaje } from 'src/app/interfaces/interfaces';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild(IonSegment) segment: IonSegment;
  villanos: Personaje[] = [];
  

  constructor(private personajeService: PersonajeService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.segment.value = this.categorias[0];
    
    this.cargarVillanos();
  }
  loadData(event) {
    this.cargarVillanos(event);
  }
  cambiarCategoria(event) {
    this.villanos = [];
    this.cargarVillanos(event.detail.value);
  }

  cargarVillanos(event?) {
    
    this.personajeService.getListVillanos().
      subscribe(resp => {
        if (resp.villanos.length === 0 ) {
          event.target.complete();
          return;
        }
     
        this.villanos.push(...resp.villanos);
        
        if (event) {
          event.target.complete();
        }

      });
  }
}
