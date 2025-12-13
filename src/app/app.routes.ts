import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/children/child.route').then((c) => c.routes),
  },
];
