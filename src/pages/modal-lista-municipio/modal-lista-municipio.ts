import { Component } from '@angular/core';

import {  Platform, NavParams,ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modal-lista-municipio.html'
})
export class ModalListaMunicipio {
  municipios = [];

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.municipios = [
      {
        codigo: '1',
        descricao: 'Canoas',
      },
      {
        codigo: '2',
        descricao: 'Porto Alegre',
      },
      {
        codigo: '4',
        descricao: 'Guaiba',
      }
    ];
  }

  dismiss(item) {
    this.viewCtrl.dismiss(item);
  }
}
