import { Component,ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var AMap;
declare var fc;
/*
  Generated class for the BaiduMap page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-baidu-map',
  templateUrl: 'baidu-map.html'
})
export class BaiduMap {
 @ViewChild('container') mapElement: ElementRef;
 @ViewChild('tip') tipElement: ElementRef;
  tip: any;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BaiduMap Page');
    this.loadMap();
  }
loadMap() {
	  
    var map = new AMap.Map(this.mapElement.nativeElement);          // 创建地图实例
    map.setZoom(10);
    map.setCenter([116.39,39.9]);
    map.centerAndZoom(new AMap.Point(113.402364,23.056676), 16); //显示中心
    var marker = new AMap.Marker();
    marker.setMap(map);
     

  }
}
