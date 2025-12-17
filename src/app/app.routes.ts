import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/children/child.route').then((c) => c.routes),
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/form/route').then((c) => c.routes),
  },
  {
    path: 'rxjs',
    loadChildren: () => import('./pages/rxjs/routes').then((c) => c.routes),
  },
  {
    path: 'template',
    loadChildren: () => import('./pages/template/route').then((m) => m.routes),
  },
];
