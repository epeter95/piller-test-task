import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormService} from '../../services/form.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {toSlug} from '../../../../shared/utilities/slug';
import {RouterLink} from '@angular/router';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-form-list',
  imports: [
    RouterLink,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatButton
  ],
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormListComponent {
  displayedColumns: Array<string> = ['name', 'stepsCount', 'status', 'action'];
  formService = inject(FormService);
  formList = toSignal(this.formService.getForms());
  protected readonly toSlug = toSlug;
}
