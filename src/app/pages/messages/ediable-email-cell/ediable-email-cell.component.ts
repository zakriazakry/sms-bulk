import { ICellRendererAngularComp } from 'ag-grid-angular';
import { Component, inject } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { NbDialogService } from '@nebular/theme';
import { EditDialogComponent } from '../../../compnent/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-ediable-email-cell',
  templateUrl: './ediable-email-cell.component.html',
  styleUrl: './ediable-email-cell.component.scss'
})
export class EdiableEmailCellComponent implements ICellRendererAngularComp {
  value :string = '';
  dialog = inject(NbDialogService);
  openEditDialog(){
    this.dialog.open(EditDialogComponent);
  }
  agInit(params: ICellRendererParams<any, any, any>): void {
    console.log(params);
    this.value = params.value;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }

}
