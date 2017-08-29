import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VazamentoPage } from './vazamento';

@NgModule({
  declarations: [
    VazamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(VazamentoPage),
  ],
})
export class VazamentoPageModule {}
