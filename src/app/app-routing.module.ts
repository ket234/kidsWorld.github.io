import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NgCarouselDemoComponent } from './component/ng-carousel-demo/ng-carousel-demo.component';

const routes: Routes = [
  // { path: "", component: HomeComponent },
  // { path: "home", component: HomeComponent },
  // {
  //   path: 'ng-slick', component: NgCarouselDemoComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
