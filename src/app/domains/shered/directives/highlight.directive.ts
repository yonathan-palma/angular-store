import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  constructor() { }

  element = inject(ElementRef)

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = "red"
  }

}
