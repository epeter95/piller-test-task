import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'forms',
    loadChildren: () =>
      import('./features/forms/forms.routes').then(m => m.FORM_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'forms',
    pathMatch: 'full'
  }
];
