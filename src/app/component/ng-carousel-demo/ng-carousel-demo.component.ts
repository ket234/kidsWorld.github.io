import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-carousel-demo',
  templateUrl: './ng-carousel-demo.component.html',
  styleUrls: ['./ng-carousel-demo.component.css']
})
export class NgCarouselDemoComponent implements OnInit {
  images = [{ img: "https://i.pinimg.com/originals/62/ac/17/62ac175c8555b1873f1f03e7e637ac54.jpg" },
  { img: "https://i.pinimg.com/originals/84/b8/ed/84b8eda0a64234beab61960536c183c7.png" },
  { img: "https://images-na.ssl-images-amazon.com/images/I/91fH7FrcJwL.jpg" }
  ];
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "dots": true,
    "infinite": true
  };
  constructor() { }

  ngOnInit(): void {
  }

}
