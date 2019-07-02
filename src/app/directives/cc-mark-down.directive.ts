import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCcMarkDown]'
})
export class CcMarkDownDirective {

  constructor(private el: ElementRef) {
    console.log('This is the Element', el);
  }

}
