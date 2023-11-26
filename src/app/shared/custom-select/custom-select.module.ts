
/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

/* Components */
import { CustomSelectComponent } from './custom-select.component';
/* routing */



@NgModule({
    declarations: [
        CustomSelectComponent,
    ],
    imports: [
        CommonModule,
        MatIconModule,
    ],
    exports: [
        CustomSelectComponent,
    ],
})
export class CustomSelectModule { }