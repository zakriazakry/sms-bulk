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
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbToastrModule,
} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PaymentDialogComponent } from './compnent/payment-dialog/payment-dialog.component';

@NgModule({
  declarations: [AppComponent,
    WelcomeComponent,
    PaymentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'zeko' }), // dark
    NbLayoutModule,
    NbListModule,
    NbCheckboxModule,
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbInputModule,
    NbEvaIconsModule,
    NbFormFieldModule,
    NbActionsModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    NbDialogModule.forRoot({
      autoFocus: false,
    }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
