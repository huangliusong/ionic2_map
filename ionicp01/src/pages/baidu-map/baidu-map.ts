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
  container: any;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello BaiduMap Page');
    this.loadMap();
  }
loadMap() {
	  
    var map = new AMap.Map(this.mapElement.nativeElement);          // 创建地图实例
    map.setZoom(10);
    map.setCenter([116.39,39.9]);
    var marker = new AMap.Marker();
    marker.setMap(map);
    var pt = new AMap.Point(116.404, 39.915);
    var myIcon = new AMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new AMap.Size(300, 157));
    var marker2 = new AMap.Marker(pt, { icon: myIcon });  // 创建标注
    map.addOverlay(marker2);              // 将标注添加到地图中+
    //在对象初始化之后进行
var placeSearch= new AMap.PlaceSearch();
placeSearch.setType('餐饮服务');
placeSearch.setCity('010');
  placeSearch.search('方恒', function(status, result) {
        });
  }
}
