import { Component } from '@angular/core';
import {HomeDetail} from '../home-detail/home-detail';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html' 
})
export class HomePage {
details;
  constructor(public navCtrl: NavController,public navparams:NavParams ) {
  	 this.navCtrl=navCtrl;
  	 this.navparams=navparams;
  }

  detail(){
  	console.log("详细信息");
  	//传递参数details
  	this.details='谢邀我来强答啦，这个问题挺复杂；先问一句是不是！然后再问为个啥！申明一下利相关，先说一个故事吧；实名反对最高票，多图慎入禁转发。唐缺大大图最多，轮哥带逛肾成渣；大师兄出新书啦，梁边有妖美如画。叉叉是个啥体验？抖个机灵千赞啦；人丑就该多读书，不然只能跪着刷。占个座位晚上答，大家来折叠我呀；反对外加没帮助，认真我才能赢啊。日报观光点赞党，一图流是这样的——[图片]瞎扯难懂来吐槽，闷声作死查水表。如何评价某某某，过了五百我爆照；点赞过亿继续更，大舅哥又调皮啦！以上以上以上上，动词大词hahaha！！';
  	//进行跳转
  	this.navCtrl.push(HomeDetail,{ dtm:this.details});
  }
  detail1(){
  	console.log("详细信息1");
  	//传递参数details
  	this.details='在这里，有对无产阶级革命家、政治家、某位长者的各种怀念（改成这样可以吗？）在这里，催生了泻药，谢邀等同音词语，然而都是“谢谢邀请”。在这里，催生了轮带逛，葡带逛等词语，然而并没有给轮、葡工资。在这里，催生了“就你图多”和“道理我都懂，可是图呢”等固定用语，然而并没有什么卵用。这里，因为数量庞大，质量上乘的妹纸爆照，被评为草榴最大的竞争对手。这里，因为吐槽，抖机灵等众多精彩短回答，养活了一大批微博抄袭狗。这里，因为内容上乘，堪称网络知识最大发源地而养活了一大批公众号。内容多，且精彩，到了什么程度呢？——以至于有人专门成立公司为原创者维权！！！这里有碎片化知识，有时事评论，有最新热点，有行业内幕！最后，这里，只是一个网站——它对你来说是获得成长还是浪费流量，完全在于你怎么使用它，以及，你用它做什么！作者：永生链接：http://www.zhihu.com/question/37701294/answer/73187731来源：知乎著作权归作者所有，转载请联系作者获得授权。';
  	//进行跳转
  	this.navCtrl.push(HomeDetail,{ dtm:this.details});
  }
}
