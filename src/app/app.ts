import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Sibling1Component } from './components/sibling/sibling1/sibling.component';
import { Sibling2Component } from './components/sibling/sibling2/sibling2.component';

@Component({
  selector: 'app-root',
  template: `
    @if(true) {
    <div class="flex justify-between" [style.height.rem]="30">
      <div class="w-full flex flex-col justify-between">
        <div class="border h-full">
          <app-sibling1 inputData="world" (onClickEvent)="onSibling1Click($event)" />
        </div>

        <div class="border h-full">
          <app-sibling2 />
        </div>
      </div>
      <div class="w-full border ">
        <router-outlet />
      </div>
    </div>
    } @else {
    <div>
      <router-outlet />
    </div>
    }
  `,
  styleUrl: './app.css',
  imports: [RouterOutlet, Sibling1Component, Sibling2Component],
})
export class App {
  protected readonly title = signal('angular_sandbox');

  onSibling1Click(value: string): void {
    alert(`Sibling 1 clicked with value: ${value}`);
  }
}
