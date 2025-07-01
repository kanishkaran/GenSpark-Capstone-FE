import { Component } from '@angular/core';
import { AccessCreateRequest } from '../../../models/access.model';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-access-dialog',
  imports: [FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './access-dialog.html',
  styleUrl: './access-dialog.css'
})
export class AccessDialog {

  formModel: AccessCreateRequest = { access: '' }

  constructor(
    public dialogRef: MatDialogRef<AccessDialog>,

  ) {

  }

  onFormSubmit(): void {
    if (this.formModel.access) {
      this.dialogRef.close(this.formModel);
    }
  }

  cancelForm(): void {
    this.dialogRef.close(null);
  }


}
