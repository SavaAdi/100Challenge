import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent implements OnInit {

  public isShown = false;

  constructor(private viewportScroller: ViewportScroller) { }

  @HostListener('window:scroll') onWindowScroll() {

    const yCoordinate = this.viewportScroller.getScrollPosition()[1]; // 0 instead of 1 should also work; 
    // It returns the coordonate in pixels
    // console.log('Y position:  ' + yCoordinate);
    this.isShown = yCoordinate > 400;
  }


  public goToTop(): void {
    //  That is a tuple with coordonates for x and y axis
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  ngOnInit(): void {
  }

}
