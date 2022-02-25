import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBgText]'
})
export class BgTextDirective {
  @HostBinding('style.background-color') backGroundColor:string = 'yellow';

  constructor() { }

}
