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

  defineShowSlideTrue(){
    let c = this.getConfigData();
    c.showSlide = true;
    this.setConfigData(c);
  }

  getConfigData(): any {
    return JSON.parse(localStorage.getItem("config"));
  }
  setConfigData(dados: any) {
    localStorage.setItem("config", JSON.stringify(dados));
  }
}
