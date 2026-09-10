import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appApphover]',
})
export class Apphover {
  constructor(private element: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
    this.element.nativeElement.style.border = '3px solid red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = '';
    this.element.nativeElement.style.border = '';
  }
}
