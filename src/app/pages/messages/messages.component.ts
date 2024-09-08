import { Component, inject, Inject, OnChanges, PLATFORM_ID } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { isPlatformBrowser } from '@angular/common';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import {  NbDialogService } from '@nebular/theme';
import { NewMsgDialogComponent } from './new-msg-dialog/new-msg-dialog.component';
import { CellMenuComponent } from './cell-menu/cell-menu.component';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnChanges{

  ngOnChanges(){

    console.log("ngOnChanges");
  }


dialog= inject(NbDialogService);

  defuColDef: ColDef = {
    flex: 1,
    minWidth: 100,
  };

  colDefs: ColDef[] = [
    { headerName: 'ID', field: 'ID', maxWidth: 100 },
    { field: 'email', headerName: 'Email' },
    { field: 'phone', headerName: 'Phone Number' },
    { field: 'message', headerName: 'Message' },
    { field: 'sendedAt', headerName: 'sended at' },
    { field: 'options',cellStyle: { 'text-align': 'center' },
      headerName: 'options',cellRenderer:CellMenuComponent},
  ];

  rowData = [
    {
      ID: '1',
      phone: '0942667816',
      email: 'zeko@example.com',
      message: 'Hello!',
      sendedAt: '2024-1-1 10:23:44',
      options: 'sss',
    },
    // {
    //   ID: '2',
    //   phone: '0942667817',
    //   email: 'john@example.com',
    //   message: 'How are you?',
    //   sendedAt: '2024-4-2 03:23:44',
    // },
    // {
    //   ID: '3',
    //   phone: '0942667815',
    //   email: 'jane@example.com',
    //   message: 'Good day!',
    //   sendedAt: '2024-5-4 04:23:44',
    // },
    // {
    //   ID: '4',
    //   phone: '0942667814',
    //   email: 'mike@example.com',
    //   message: 'Need help!',
    //   sendedAt: '2024-7-5 12:23:44',
    // },
  ];

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    console.log(platformId);
  }
  newMessage(){
    this.dialog.open(NewMsgDialogComponent)
  }
}
