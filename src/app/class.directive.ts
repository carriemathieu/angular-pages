import { Directive, ElementRef, Input } from '@angular/core';

// inside html template, add "appClass" to whatever element we want to apply directive to 
@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  // element - direct reference to LI element in HTML template
  constructor(private element:ElementRef) {}
  
  // @input allows property to be set by parent componenet
  // allows us to "intercept" whenever angular tries to set background color
  @Input('appClass') set classNames(classObj: any) {
    // nativeElement - actual element (li)
    for (let key in classObj){
      if (classObj[key]){
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
