import { SegundaViaDetalhePage } from './../segunda-via-detalhe/segunda-via-detalhe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SegundaViaListaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segunda-via-lista',
  templateUrl: 'segunda-via-lista.html',
})
export class SegundaViaListaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegundaViaListaPage');
  }

  segundaViaDetalhe(){
    this.navCtrl.push(SegundaViaDetalhePage)
  }

}
