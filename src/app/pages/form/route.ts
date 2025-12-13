import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reactive-form',
    loadComponent: () =>
      import('./reactive-form/reactive-form.component').then((c) => c.ReactiveFormComponent),
  },
];
