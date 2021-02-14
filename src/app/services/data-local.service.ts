import { Injectable } from '@angular/core';
import { Storage } from "@capacitor/core";
import { ToastController } from '@ionic/angular';
import { Personaje } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

   personajes: Personaje[] = [];
   existFavoritos = false;

  constructor(public toastController: ToastController) {
    this.clearFavoritos();
   }
  async guardarPersonaje( personaje: Personaje) {
      const existe = this.personajes.some(perso => perso.nombre === personaje.nombre);

      if (!existe) {
      this.personajes.unshift(personaje);
      await Storage.set({
             key: 'favoritos',
             value: JSON.stringify(personaje)
          });
     }
    
     this.presentToast( 'Se guardo en favoritos' );
  }

   async borrarPersonaje(personaje: Personaje) {
    this.personajes = this.personajes.filter(noti => noti.nombre != personaje.nombre);
    await Storage.set({
      key: 'favoritos',
      value: JSON.stringify(this.personajes)
    });
    this.presentToast( 'Borrado de favoritos' );
  }
  async presentToast( message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  async clearFavoritos(){
    await Storage.clear();
  }

  isFavorito(personaje: Personaje){
    return this.personajes.length === 0 ? false : this.personajes.some(noti => noti.nombre === personaje.nombre);
  }
}
