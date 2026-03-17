import { Component } from '@angular/core';
import {PrimaryHeaderComponent} from '../../../../shared/ui/primary-header/primary-header.component';
import {RouterOutlet} from '@angular/router';
import {PrimaryFooterComponent} from '../../../../shared/ui/primary-footer/primary-footer.component';

@Component({
  selector: 'app-form-layout',
  imports: [
    PrimaryHeaderComponent,
    RouterOutlet,
    PrimaryFooterComponent
  ],
  templateUrl: './form-layout.component.html',
  styleUrl: './form-layout.component.scss',
})
export class FormLayoutComponent {}
