import { Component, OnInit } from '@angular/core';


// import * as AOS from 'aos';
declare const slide: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [("https://picsum.photos/id/944/900/500"),
  ("https://picsum.photos/id/1011/900/500"),
  ("https://picsum.photos/id/984/900/500")].map((n) => n);

  constructor() { }

  ngOnInit(): void {
    // AOS.init();

  }

}
