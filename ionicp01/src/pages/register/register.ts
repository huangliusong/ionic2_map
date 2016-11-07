import { Component } from '@angular/core';
import {AlertController, NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {
  public user={
    username:'',
    password:'',
    phone:'',
    sex: '0',
    birthDay: "1990-01-10",
    personImg: 'assets/icon/nin-live.png'
  }
	myName;
	myJob;
  constructor(public alertCtrl:AlertController,public navCtrl: NavController,public navparams:NavParams) {
  	this.navparams=navparams;
  	this.myName=this.navparams.get('name');
  	this.myJob=this.navparams.get('job');
    this.alertCtrl=alertCtrl;
  }

  ionViewDidLoad() {
    console.log('Hello Register Page');
  }
addUser(){
  
  if(this.user.username==''||this.user.password==''||this.user.phone==''){
      let alert=this.alertCtrl.create({
        title:'验证信息',
        subTitle:'手机号,密码,姓名都不能为空！',
        buttons:['ok']
      });
      alert.present();
  } else{
    console.log('执行添加用户');
  }
}
}
