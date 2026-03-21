import {Routes} from '@angular/router';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'forms',
        pathMatch: 'full'
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./features/forms/forms.routes').then(m => m.FORM_ROUTES),
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'forms'
  }
];
