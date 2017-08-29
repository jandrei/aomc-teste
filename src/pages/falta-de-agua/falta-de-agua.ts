import { InformarFaltaDeAguaPage } from './../informar-falta-de-agua/informar-falta-de-agua';
import { ModalListaMunicipio } from './../modal-lista-municipio/modal-lista-municipio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the FaltaDeAguaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-falta-de-agua',
  templateUrl: 'falta-de-agua.html',
})
export class FaltaDeAguaPage {

  areaBotaoInformarFaltaDeAguaHabilitado: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaltaDeAguaPage');
  }

  abreModalSelecionaMunicipio() {
    let modal = this.modalCtrl.create(ModalListaMunicipio);
    modal.onDidDismiss(data => {
      console.log("data"+data)
    });
    modal.present();
  }

  consultarSituacaoAbastecimento() {
    this.mostraAreaBotaoInformarFaltaDeAguaHabilitado();
  }

  vaiTelaInformarFaltaDeAgua() {
    this.navCtrl.push(InformarFaltaDeAguaPage);
  }

  escondeAreaBotaoInformarFaltaDeAguaHabilitado() {
    this.areaBotaoInformarFaltaDeAguaHabilitado = false;
  }

  mostraAreaBotaoInformarFaltaDeAguaHabilitado() {
    this.areaBotaoInformarFaltaDeAguaHabilitado = true;
  }

}
