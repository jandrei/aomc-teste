import { SegundaViaListaPage } from '../segunda-via-lista/segunda-via-lista';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SegundaViaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segunda-via',
  templateUrl: 'segunda-via.html',
})
export class SegundaViaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegundaViaPage');
  }

  segundaViaLista(){
    this.navCtrl.push(SegundaViaListaPage);
  }

}
