import { Directive, input, output } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onLog()',
  },
})
export class LogDirective {
  msg = input<string>('Greeting', {
    alias: 'message',
  });

  clicked = output<void>();

  onLog() {
    alert(this.msg());
    this.clicked.emit();
  }
}
