import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the HomeDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home-detail',
  templateUrl: 'home-detail.html'
})
export class HomeDetail {
  detail_message;
  constructor(public navCtrl: NavController,public navparams:NavParams) {
  	this.navCtrl=navCtrl;
  	this.navparams=navparams;
  	this.detail_message=navparams.get('dtm');
  }

  ionViewDidLoad() {
    console.log('Hello HomeDetail Page');
  }

}
