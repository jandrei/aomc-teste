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
  rootPage:any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    configProvider: ConfigProvider
  ) {
    platform.ready().then(() => {
      let config = configProvider.getConfigData();

      if (!config.showSlide){
        this.rootPage = IntroPage;
        config.showSlide = true;
        configProvider.setConfigData(config);
      }

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

