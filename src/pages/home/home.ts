import { VazamentoPage } from './../vazamento/vazamento';
import { FaltaDeAguaPage } from './../falta-de-agua/falta-de-agua';
import { SegundaViaPage } from './../segunda-via/segunda-via';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController
  ) {

  }

  segundaVia() {
    this.navCtrl.push(SegundaViaPage);
  }

  faltaDeAgua() {
    this.navCtrl.push(FaltaDeAguaPage);
  }

  vazamento() {
    this.navCtrl.push(VazamentoPage);
  }

}
