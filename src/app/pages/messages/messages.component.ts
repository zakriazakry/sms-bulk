import {
  Component,
  inject,
  Inject,
  OnChanges,
  PLATFORM_ID,
  OnInit,
  effect,
  signal,
} from '@angular/core';
import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { isPlatformBrowser } from '@angular/common';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { NbDialogService } from '@nebular/theme';
import { NewMsgDialogComponent } from './new-msg-dialog/new-msg-dialog.component';
import { CellMenuComponent } from './cell-menu/cell-menu.component';
import { StatemangmentService } from '../../services/statemangment.service';
import { EdiableEmailCellComponent } from './ediable-email-cell/ediable-email-cell.component';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  isBrowser: boolean;
  statemg = inject(StatemangmentService);
  dialog = inject(NbDialogService);
  myInput = signal('');
  defuColDef: ColDef = {
    flex: 1,
    minWidth: 100,
  };

  colDefs: ColDef[] = [
    { headerName: 'ID', field: 'ID', maxWidth: 100 },
    {
      field: 'email',
      headerName: 'Email',
      cellRendererSelector: (ce: ICellRendererParams) => {
        return { component: EdiableEmailCellComponent };
      },
    },
    { field: 'phone', headerName: 'Phone Number' },
    { field: 'message', headerName: 'Message' },
    { field: 'sendedAt', headerName: 'sended at' },
    {
      field: 'options',
      cellStyle: { 'text-align': 'center' },
      headerName: 'options',
      cellRenderer: CellMenuComponent,
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.myInput = this.statemg.getData();
    console.log('constructor');
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  rowData = [
    {
      ID: '1',
      phone: '0942667816',
      email: 'zeko@example.com',
      message: 'Hello!',
      sendedAt: '2024-1-1 10:23:44',
      options: 'sss',
    },
    {
      ID: '2',
      phone: '0942667817',
      email: 'john@example.com',
      message: 'How are you?',
      sendedAt: '2024-4-2 03:23:44',
      options: 'sss',
    },
  ];

  newMessage() {
    this.dialog.open(NewMsgDialogComponent);
  }
}
