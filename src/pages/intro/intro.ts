import { MyApp } from './../../app/app.component';
import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private myApp: MyApp ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  pularApresentacao() {
    //redefinindo rootpage para que quando mostrar o slide e
    //depois tentar voltar para o root ele volte para o lugar certo
    this.myApp.rootPage = HomePage;
    this.navCtrl.push(HomePage);
  }

}
