import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConteudoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conteudo',
  templateUrl: 'conteudo.html',
})
export class ConteudoPage {

  dados={}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.data);
    
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConteudoPage');
    this.dados=this.navParams.data;
  }


}
//this.NavController.pop derruba a ultima 