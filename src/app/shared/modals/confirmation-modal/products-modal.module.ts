
/* Angular */
import { NgModule } from '@angular/core';
import { DialogModule } from '@angular/cdk/dialog';

/* Components */
import { ConfirmationModalComponent } from './confirmation-modal.component';


@NgModule({
    declarations: [
        ConfirmationModalComponent,
    ],
    imports: [
        DialogModule

    ],
    exports: [
        ConfirmationModalComponent
    ],
})
export class ConfirmationModalModule { }