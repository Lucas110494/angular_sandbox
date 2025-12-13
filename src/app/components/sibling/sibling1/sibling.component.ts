import { Component, computed, effect, EventEmitter, input, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  template: ` <div>
    <h3>Sibling 1 Component</h3>
    <p>
      Value from @Input: <b>{{ InputData }}</b>
    </p>
    <p>
      Value from input: <b>{{ inputData() }}</b>
    </p>
    <p>
      Value from signal: <b>{{ signal_info() }}</b>
    </p>
    <p>
      Value from compute: <b>{{ compute_info() }}</b>
    </p>

    <input class="border" type="text" (change)="onChange($event)" />

    <div>
      <button class="border" (click)="onEmit(InputData)">Click me</button>
    </div>
  </div>`,
})
export class Sibling1Component {
  @Input({
    required: false,
    alias: 'data',
    transform: (value: string) => value.toUpperCase(),
  })
  InputData: string = 'hello';

  inputData = input<string, string>('world',{
    transform: (value: string) => value.toUpperCase(),
  })

  @Output() onClickEvent = new EventEmitter<string>();

  isFirst: boolean = false;

  constructor() {
    effect(() => {
      // if (this.isFirst) {
      //   console.log(this.signal_info());
      // }
    });
  }

  signal_info = signal<string | null>(null);
  compute_info = computed(() => {
    return !!this.signal_info() ? `Computed: ${this.signal_info()}` : 'No Value';
  });

  onChange(e: any) {
    this.isFirst = true;
    this.signal_info.set(e.target.value);
    console.log(this.isFirst);
  }

  onEmit(value: string) {
    this.onClickEvent.emit(value);
  }
}
