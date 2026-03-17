import { Routes } from '@angular/router';
import {FormLayoutComponent} from './layout/form-layout/form-layout.component';
import {FormListComponent} from './pages/form-list/form-list.component';
import {FormWizardComponent} from './pages/form-wizard/form-wizard.component';

export const FORM_ROUTES: Routes = [
  {
    path: '',
    component: FormLayoutComponent,
    children: [
      {
        path: '',
        component: FormListComponent
      },
      {
        path: ':name',
        component: FormWizardComponent
      }
    ]
  }
];
