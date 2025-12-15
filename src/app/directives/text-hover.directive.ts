import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTextHover]',
  standalone: true,
})
export class TextHoverDirective {
  textColor = input('#763ab7');

  @HostListener('mouseenter') mouseEnter() {
    this.renderer.setStyle(this.elementRef, 'color', this.textColor());
  }

  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.elementRef, 'color', '#000');
  }

  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef).nativeElement;
}
