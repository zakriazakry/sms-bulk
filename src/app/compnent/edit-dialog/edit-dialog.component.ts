import { Component, inject } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { StatemangmentService } from '../../services/statemangment.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  dialog = inject(NbDialogRef);
  statemng = inject(StatemangmentService);
 
  close() {
    if (this.form.valid) {
      this.statemng.setData(this.form.get('email')?.value ?? '')
      this.dialog.close();
    } else {
      this.form.markAllAsTouched();
    }
  }

  onBlur(controlName: string) {
    this.form.get(controlName)?.markAsTouched();
  }
}
