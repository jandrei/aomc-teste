import { FaltaDeAguaPage } from './../pages/falta-de-agua/falta-de-agua';
import { SegundaViaDetalhePage } from './../pages/segunda-via-detalhe/segunda-via-detalhe';
import { HomePage } from './../pages/home/home';
import { ConfigProvider } from './../providers/config/config';
import { IntroPage } from './../pages/intro/intro';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html',
  providers:[
    ConfigProvider
  ]
})
export class MyApp {
  rootPage:any = null;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    configProvider: ConfigProvider
  ) {
    platform.ready().then(() => {
      let config = configProvider.getConfigData();
      let forca = false;
      if (!config.showSlide || forca){
        this.rootPage = IntroPage;
        configProvider.defineShowSlideTrue();
      }else{
        this.rootPage = FaltaDeAguaPage;
      }

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

