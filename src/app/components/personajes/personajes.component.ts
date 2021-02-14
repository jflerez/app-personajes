import { Component, Input } from '@angular/core';
import { Personaje } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent {

  @Input() personajes: Personaje[] = [];
  @Input() enFavoritos = false;

  constructor(private datalocalService: DataLocalService) { }

}
