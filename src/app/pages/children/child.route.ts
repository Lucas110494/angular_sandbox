import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'child1',
    loadComponent: () => import('./child1/child1.component').then((c) => c.Child1Component),
  },
  {
    path: 'child2',
    loadComponent: () => import('./child2/child2.component').then((c) => c.Child2Component),
  },
  {
    path: 'child3',
    loadComponent: () => import('./child3/child3.component').then((c) => c.Child3Component),
  },
];
