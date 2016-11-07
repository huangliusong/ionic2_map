import { Component } from '@angular/core';
import {Register} from  "../register/register";
import {ToastController ,NavParams, NavController,Loading,LoadingController ,ModalController,AlertController,ViewController} from 'ionic-angular';
import {Http} from "@angular/http";
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public user={
    username:'',
    password:''
  }
  constructor(public viewCtrl:ViewController,public toast:ToastController ,public http:Http,public navparams:NavParams ,public alertCtrl:AlertController,private navCtrl: NavController,private loadingCtrl: LoadingController,public modalCtrl: ModalController) {
    this.navCtrl=navCtrl;
    this.loadingCtrl=loadingCtrl;
    this.modalCtrl=modalCtrl;
    this.alertCtrl=alertCtrl;
    this.navparams=navparams;
    this.viewCtrl=viewCtrl;
    this.http=http;
    this.toast=toast;
  }
register(){

     console.log('注册输出日志');
     //实现页面跳转
     this.navCtrl.push(Register,{ name:this.user.username, job: this.user.password});
 }
login(){
  console.log('用户名-------------'+this.user.username);
  console.log('密码---------------'+this.user.password);
  if(this.user.username==''){
      let alert=this.alertCtrl.create({
        title:'验证信息',
        subTitle:'用户名不能为空',
        buttons:['ok']
      });
      alert.present();
  }else if(this.user.password=='')
  {
     let alert=this.alertCtrl.create({
        title:'验证信息',
        subTitle:'密码不能为空',
        buttons:['ok']
      });
      alert.present();
  }else{
    //做登陆操作
    console.log(this.user.username+'登陆');
    let loader = this.loadingCtrl.create({
      content: "正在登录",
      duration: 3000
    });
    loader.present();
    //http请求
    //this.http.get('http://api.gugujiankong.com/account/Login?email='+this.user.username+'&password=1')
    this.http.get('http://localhost:8100/')
    //this.http.get('http://api.gugujiankong.com/account/Login?email=1@qq.com&password=1&callback=JSON_CALLBACK')
    .subscribe(data=>{
      let toast = this.toast.create({
      message: '登录成功',
      duration: 3000
    });
    localStorage.setItem('islogin','true');
    localStorage.setItem('username',''+this.user.username);
    loader.dismiss();
    this.viewCtrl.dismiss();
    var u=localStorage.getItem('islogin');
   /* if(u=='true'){
      console.log('uuu'+u);
    }else{
      console.log('false'+u);
    }*/
    // if(localStorage.getItem('islogin')==true){
    //   console.log('islogin==true');
    // }else{
    //   console.log('islogin==false');
    // }
    },error=>{
    localStorage.setItem('islogin','false');
     let toast = this.toast.create({
      message: '登录失败',
      duration: 3000
    }); 
    toast.present();
    loader.dismiss();
    });
  }
 }
}
