import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./rxjs.component').then((c) => c.RxjsComponent),
  },
];
