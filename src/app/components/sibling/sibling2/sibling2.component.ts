import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../card/card.component';
import { CustomComponent } from '../../custom-component/custom-component.component';
import { OnClickDirective } from '../../../directives/onClick.directive';
import { EnhancedDirective } from '../../../directives/enhanced.directive';

@Component({
  selector: 'app-sibling2',
  template: `<div class="remove">
    <app-card class="large" variant="secondary" >
      <h3 enhancedDirective [textColor]="'red'" message="Hello world">FORM</h3>
      <form (ngSubmit)="onSubmit()">
        <input class="border" type="text" name="username" [(ngModel)]="userNameSignal" />
        <button type="submit">Submit</button>
      </form>

      <div id="divId">divId</div>

      <button class="border" (click)="onChangeVariant()">Change variant</button>

      <app-custom-component />
    </app-card>
  </div>`,
  imports: [FormsModule, CardComponent, CustomComponent, EnhancedDirective],
  host: {
    class: 'large',
  },
})
export class Sibling2Component {
  userNameSignal = signal<string>('');
  userName: string = '';

  isPrimary = signal<boolean>(false);

  onSubmit(): void {
    console.log(this.userNameSignal());
  }

  onChangeVariant(): void {
    console.log('test');
    this.isPrimary.update((v) => !v);
  }
}
