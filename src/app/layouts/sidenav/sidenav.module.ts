
/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

/* Components */
import { SidenavComponent } from './sidenav.component';
import { CustomSelectModule } from 'src/app/shared/custom-select/custom-select.module';

/* routing */



@NgModule({
    declarations: [
        SidenavComponent,
    ],
    imports: [
        CustomSelectModule,
        MatIconModule,
        CommonModule,
    ],
    exports: [
        SidenavComponent,
    ],
})
export class SidenavModule { }