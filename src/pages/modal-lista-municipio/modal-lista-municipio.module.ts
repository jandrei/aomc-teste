import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalListaMunicipio } from './modal-lista-municipio';

@NgModule({
  declarations: [
    ModalListaMunicipio,
  ],
  imports: [
    IonicPageModule.forChild(ModalListaMunicipio),
  ],
})
export class ModalListaMunicipioModule {}
