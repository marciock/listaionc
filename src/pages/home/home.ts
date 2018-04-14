import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListaProvider } from '../../providers/lista/lista';
import { ConteudoPage } from '../conteudo/conteudo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista=[];

  constructor(public navCtrl: NavController,private listaProvider:ListaProvider,public navParams:NavParams) {


  }

  ionViewDidLoad() {
    this.carregarLista();
  }


  carregarLista(){
    this.listaProvider.buscaLista().subscribe(result => {
      this.lista = JSON.parse(result['_body']);

    } );
  }
  novaPagina(item){
    this.navParams.data=item;
    this.navCtrl.push(ConteudoPage,this.navParams);
  }
  
}
