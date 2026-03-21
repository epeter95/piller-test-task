import {Routes} from '@angular/router';
import {FormListComponent} from './pages/form-list/form-list.component';
import {FormWizardComponent} from './pages/form-wizard/form-wizard.component';

export const FORM_ROUTES: Routes = [
  {
    path: '',
    component: FormListComponent
  },
  {
    path: ':id/:slug',
    component: FormWizardComponent
  },
  {
    path: '**',
    redirectTo: 'forms',
  }
];
