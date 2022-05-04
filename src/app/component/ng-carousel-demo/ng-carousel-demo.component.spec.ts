import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCarouselDemoComponent } from './ng-carousel-demo.component';

describe('NgCarouselDemoComponent', () => {
  let component: NgCarouselDemoComponent;
  let fixture: ComponentFixture<NgCarouselDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCarouselDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCarouselDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
