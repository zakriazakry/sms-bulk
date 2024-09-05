import { Component, inject, OnInit } from '@angular/core';
import { NbButtonModule, NbDialogService } from '@nebular/theme';
import { PaymentDialogComponent } from '../../compnent/payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[NbButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dialog = inject(NbDialogService)

  constructor() { }

  openDialog(){
    this.dialog.open(PaymentDialogComponent);
  }

  ngOnInit() {
  }

}
