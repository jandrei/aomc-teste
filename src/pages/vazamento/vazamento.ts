import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VazamentoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vazamento',
  templateUrl: 'vazamento.html',
})
export class VazamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  listaTipoVazamentos = [
    { cod: 'agua', desc: 'Água' },
    { cod: 'esgoto', desc: 'Esgoto' },
  ];

  listaLocalVazamento = [
    { cod: 701, desc: 'Rua' },
    { cod: 122, desc: 'Imóvel' },
  ];

  vazamentoED = {
    tipoVazamento: 'agua',
    nroCodTpSol: 0
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VazamentoPage');
  }

}
