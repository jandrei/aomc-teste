import { SegundaViaPage } from './../segunda-via/segunda-via';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
  ) {

  }

  segundaVia(){
    this.navCtrl.push(SegundaViaPage);
  }

}
