import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/services/notification/notification.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { type: string, },
    private _notificationService: NotificationService,
    private _dialogRef: MatDialogRef<ModalComponent>,
  ) { }


  ngOnInit(): void { }

  closeModal(): void {
    this._dialogRef.close();
  }

  eventEmmisionReceiver(shouldCloseModal: boolean): void {
    if (shouldCloseModal) {
      this.closeModal();
    }
  }


}
