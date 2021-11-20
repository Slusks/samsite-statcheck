import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  images: string[] =["../assets/img/damwon.jpg",
  "../assets/img/FPX.jpg",
  "../assets/img/2015skt.webp",
  "../assets/img/2017SSG.webp",
  "../assets/img/2014SSW.webp",
  "../assets/img/TPA.webp",
  "../assets/img/Fnatic.webp"]

  backgroundImage: string = '';
  constructor() { }

  ngOnInit() {
    let ran = Math.floor(Math.random()*6);
    console.log(ran, Math.random()*100)
    this.backgroundImage = this.images[ran];
  }

}
