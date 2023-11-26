import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {

  /**
 * Constructor
 */
  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) {

  }

  ngOnInit(): void { }

  confirm(): void {
    this.dialogRef.close('confirm');
  }

  cancel(): void {
    this.dialogRef.close('cancel');
  }
}
