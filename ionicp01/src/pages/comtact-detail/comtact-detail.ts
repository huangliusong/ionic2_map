import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ComtactDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-comtact-detail',
  templateUrl: 'comtact-detail.html'
})
export class ComtactDetail {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ComtactDetail Page');
  }

}
