import { Component } from '@angular/core';
import { Personaje } from 'src/app/interfaces/interfaces';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  heroes: Personaje[] = [];

  constructor(private personajeService: PersonajeService) { }

  ngOnInit(): void {

    this.cargarHeroes();

  }
  loadData(event) {
    this.cargarHeroes(event);
  }

  cargarHeroes(event?) {

    this.personajeService.getListHeroes().subscribe(resp => {
      if (resp.heroes.length === 0) {
        event.target.disabled = true;
        event.target.complete();
        return;
      }

      this.heroes.push(...resp.heroes);

      if (event) {
        event.target.complete();
      }

    });
  }

}