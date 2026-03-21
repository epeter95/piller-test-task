import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MainHeaderComponent} from '../../shared/ui/main-header/main-header.component';
import {MainFooterComponent} from '../../shared/ui/main-footer/main-footer.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    MainHeaderComponent,
    MainFooterComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
}
