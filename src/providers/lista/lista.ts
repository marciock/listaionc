import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaProvider {
  url="https://raw.githubusercontent.com/marciock/tortuga/master/telefones.json";
  constructor(public http: Http) {
    console.log('Hello ListaProvider Provider');
  }
  buscaLista(){
    return this.http.get(this.url);
  }


}
