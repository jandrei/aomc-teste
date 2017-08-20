import { Injectable } from '@angular/core';
@Injectable()
export class ConfigProvider {



  constructor() {
    //se nao existir nada no localstorage, cria o objeto com os campos defaults
    if (localStorage.getItem("config") == null) {
      let config = {
        token: "",
        clientKey: "",
        showSlide: false
      }

      this.setConfigData(config);
    }
  }

  getConfigData(): any {
    return JSON.parse(localStorage.getItem("config"));
  }
  setConfigData(dados: any) {
    localStorage.setItem("config", JSON.stringify(dados));
  }
}
