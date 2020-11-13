import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appRipple]'
})
export class RippleDirective {

// this needs to match the value of the selector in order to work properly
  @Input() public appRipple = 'ripple';

  constructor(public element: ElementRef, public renderer: Renderer2) {

  }

  @HostListener('mouseenter') onHover() {
    this.renderer.addClass(this.element.nativeElement, this.appRipple);
  }

  // scss was added to the global style sheet for general availability. You could have a different style sheet...
}
