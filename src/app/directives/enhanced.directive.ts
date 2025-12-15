import { Directive, input } from '@angular/core';
import { TextHoverDirective } from './text-hover.directive';
import { LogDirective } from './log.directive';

@Directive({
  selector: '[enhancedDirective]',
  hostDirectives: [
    {
      directive: TextHoverDirective,
      inputs: ['textColor'],
    },
    {
      directive: LogDirective,
      inputs: ['message'],
      outputs: ['clicked'],
    },
  ],
})
export class EnhancedDirective {
  textColor = input<string>();
  message = input<string>();
}
