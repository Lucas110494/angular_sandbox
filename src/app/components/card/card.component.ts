import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="border p-5 m-2 large">
      <h3 class="encapsulate">CardComponent</h3>
      <!-- <ng-content select="#divId" /> -->
       <ng-content />

      <br />
      <!-- <div class="w-full h-1 border"></div> -->
      <!-- <ng-content select="form" />
      <ng-content select="app-custom-component" /> -->
    </div>
  `,
  styles: `
    :host([variant="hidden"]) {
      display: none;
    }

    :host([variant="primary"]) {
      color: blue;
    }

    :host([variant="secondary"]) {
      color: green;
    }

    :host(.large) {
      font-size: 2.25rem;
    }

    :host-context(.remove) .encapsulate {
      text-decoration: line-through;
    }
  `,
})
export class CardComponent implements OnChanges, OnInit{
  ngOnChanges(changes: SimpleChanges): void {
    console.log('test');
  }

  ngOnInit(): void {
    console.log('init');
  }
}
