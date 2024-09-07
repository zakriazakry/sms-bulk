import { Component, inject } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrl: './payment-dialog.component.scss'
})
export class PaymentDialogComponent {
dialogService = inject(NbDialogService);
dialogRef = inject(NbDialogRef);
}
