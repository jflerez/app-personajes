import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Browser, Share } from "@capacitor/core";
import { DataLocalService } from '../../services/data-local.service';
import { Personaje } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.scss'],
})
export class PersonajeComponent implements OnInit {

  @Input() personaje: Personaje;
  @Input() indice: number;
  @Input() enFavoritos;

  constructor(private actionSheetCtrl: ActionSheetController,
    private datalocalService: DataLocalService) { }

  ngOnInit() { }

  async lanzarMenu() {

    let guardarBorrarBtn;


    if (!this.enFavoritos) {
      guardarBorrarBtn =
      {
        text: 'Favorito',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          this.datalocalService.guardarPersonaje(this.personaje);
        }
      }
    } else {
      guardarBorrarBtn =
      {
        text: 'Favorito',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          this.datalocalService.borrarPersonaje(this.personaje);
        }
      }

    }

    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          Share.share({
            title: this.personaje.img,
            text: this.personaje.bio,
            url: this.personaje.img,
            dialogTitle: 'Share'
          })
        }
      },
        guardarBorrarBtn
        ,
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
