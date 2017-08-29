import { VazamentoPageModule } from './../pages/vazamento/vazamento.module';
import { InformarFaltaDeAguaPageModule } from './../pages/informar-falta-de-agua/informar-falta-de-agua.module';
import { ModalListaMunicipioModule } from './../pages/modal-lista-municipio/modal-lista-municipio.module';
import { FaltaDeAguaPageModule } from './../pages/falta-de-agua/falta-de-agua.module';
import { IntroPageModule } from './../pages/intro/intro.module';
import { SegundaViaDetalhePageModule } from './../pages/segunda-via-detalhe/segunda-via-detalhe.module';
import { SegundaViaListaPageModule } from './../pages/segunda-via-lista/segunda-via-lista.module';
import { SegundaViaPageModule } from './../pages/segunda-via/segunda-via.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConfigProvider } from '../providers/config/config';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SegundaViaPageModule,
    SegundaViaListaPageModule,
    SegundaViaDetalhePageModule,
    FaltaDeAguaPageModule,
    IntroPageModule,
    ModalListaMunicipioModule,
    InformarFaltaDeAguaPageModule,
    VazamentoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
  ]
})
export class AppModule {}
