import { Component } from '@angular/core';
import { ModalController,NavController,NavParams } from 'ionic-angular';
import {AboutPage} from  "../about/about";
/*
  Generated class for the Usercenter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-usercenter',
  templateUrl: 'usercenter.html'
})
export class Usercenter {
  uName;
	public user={
		username:"",
		password:"",
		headface:'',
	}
  constructor(public navParams:NavParams,public modalCtrl:ModalController,public navCtrl: NavController) {
  		this.navCtrl=navCtrl;
  		this.modalCtrl=modalCtrl;
      this.navParams=navParams;
      console.log(""+localStorage.getItem('username'));
      this.uName=localStorage.getItem('username');
  		var user=localStorage.getItem('islogin');
      if(user=='true'){
        console.log('已经登录'); 
      }else{
        let profileModal = this.modalCtrl.create(AboutPage, { userId: 8675309 });
        profileModal.present();
  }
  }
  ionViewDidLoad() {
    console.log('Hello Usercenter Page');
  }

logout(){
	console.log('注销');
  localStorage.setItem('islogin','');
  localStorage.setItem('username','');
  let profileModal = this.modalCtrl.create(AboutPage, { userId: 8675309 });
        profileModal.present();
  }
}
