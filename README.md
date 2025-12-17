# Angular

### string interpolation
### property binding
### event binding
### signal()`, `computed()`, `effect()`
### `*ngFor`
### `@for()` and `track`
### `$index`, `$odd`, `$even`, `$count`, `$first`, `$last`
### `@empty`
### `*ngIf="condition;else"`
### `@if()`, `@else if` and `@else()`
### `[(ngModel)]` and `ngSubmit`

### `ng-container`
### `ngTemplateOutlet`
### `<ng-container *ngTemplateOutlet="estimateTemplate;context:{}">`

### `ng-content` and `select`

### `selector: 'app-button'`
### `selector: '[appButton]'`
### `selector: '.app-button'`
### `selector: '#app-button'`
### `selector: 'button[appButton]'`

### `ngProjectAs`

### `ViewEncapsulation.Emulated`
### `ViewEncapsulation.None`
### `ViewEncapsulation.ShadowDom`

### `:host`
### :host([variant="hidden"]) {
###   display: none;
### }

### :host(.large) {
###   font-size: 2.25rem;
### }

### :host(:hover) {
###   transform: translateY(-1px);
### }

### :host(:has(.icon)) {
###   padding-left: 2rem;
### }

### :host header {
###   font-size: 1.2rem;
### }

### `:host-context()`
### :host-context(.remove) .encapsulate {
###   text-decoration: line-through;
### }

### `::ng-deep`

### `{ host: {} }`
### `@HostBinding()`
### `@HostListener()`
### `ElementRef`

############################ `LIFE CYCLES`
### `DestroyRef`
### `Template Variable`
### `@ViewChild()` and `viewChild()` signal
### `@ViewChildren()` and `viewChildren()` signal
### `@ContentChild()` and `contentChild()` signal
### `@ContentChildren()` and `contentChildren()` signal

############################# `DIRECTIVE`
### `SAC` === `Structure Directive`, `Attribute Directive`, `Component Directive`
### `*ngIf="isShow()"`==> `[ngIf]="isShow()"`
### `selector: '[appSafeLink]'`, `selector: 'a[appSafeLink]'`, `selector: 'div[appSafeLink]'`
### Directive binding `[appDirective]`
### Event binding `(appDirective)`
### `exportAs` and use via `Template Reference` and `@ViewChild`
### Directive composition and combination `hostDirectives`
### hostDirectives: [
###   { directive: LogDirective, inputs: ['message'], outputs: ['clicked'] },
###   { directive: TextHoverDirective, inputs: ['textColor'] },
### ],

############################## `PIPE`
### Built-in pipes
### `<pipe>:<pipe_arguments>`
### `pure`, `impure`
### `async as someThing`


### `provideAppInitializer`
### `provideEnvironmentInitializer`
### `makeEnvironmentProviders`
