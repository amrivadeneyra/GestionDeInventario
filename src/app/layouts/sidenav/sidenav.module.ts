
/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

/* Components */
import { SidenavComponent } from './sidenav.component';
import { CustomSelectModule } from 'src/app/shared/custom-select/custom-select.module';
import { MatDialogModule } from '@angular/material/dialog';

/* routing */



@NgModule({
    declarations: [
        SidenavComponent,
    ],
    imports: [
        CustomSelectModule,
        MatIconModule,
        CommonModule,
         MatDialogModule,
    ],
    exports: [
        SidenavComponent,
    ],
})
export class SidenavModule { }