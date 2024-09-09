import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule,
  NbThemeModule,
  NbToastrModule,
  NbUserModule,
} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PaymentDialogComponent } from './compnent/payment-dialog/payment-dialog.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { MessagesComponent } from './pages/messages/messages.component';
import { AgGridAngular } from 'ag-grid-angular';
import { NewMsgDialogComponent } from './pages/messages/new-msg-dialog/new-msg-dialog.component';
import { CellMenuComponent } from './pages/messages/cell-menu/cell-menu.component';
import { EdiableEmailCellComponent } from './pages/messages/ediable-email-cell/ediable-email-cell.component';
import { EditDialogComponent } from './compnent/edit-dialog/edit-dialog.component';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AppComponent,
    WelcomeComponent,
    PaymentDialogComponent,
    MessagesComponent,
    NewMsgDialogComponent,
    CellMenuComponent,
    EdiableEmailCellComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NbSelectModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'zeko' }), // dark
    NbLayoutModule,
    NbListModule,
    NbCheckboxModule,
    NbUserModule,
    NbContextMenuModule,
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    AgGridAngular,
    NbSidebarModule.forRoot(),
    NbInputModule,
    ReactiveFormsModule,
    CommonModule,
    NbEvaIconsModule,
    NbFormFieldModule,
    NbActionsModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forRoot({
      autoFocus: false,
    }),
    NgxEchartsModule.forRoot({ echarts }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
