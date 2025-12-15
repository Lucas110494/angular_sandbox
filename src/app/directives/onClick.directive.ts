import { Directive, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnClick]',
  // host: {
  //   '(click)': 'handleClick($event)',
  // }
})
export class OnClickDirective {
  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    console.log('Element clicked:', event);
  }
}
