import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-main-footer',
  imports: [
    MatToolbar
  ],
  templateUrl: './main-footer.component.html',
  styleUrl: './main-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainFooterComponent {
}
