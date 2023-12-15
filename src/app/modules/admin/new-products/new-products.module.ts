
/* Angular */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_FORMATS, MatNativeDateModule } from "@angular/material/core";

/* Components */
import { NewProductsComponent } from './new-products.component';
import { SidenavModule } from 'src/app/layouts/sidenav/sidenav.module';

/* routing */
import { newProductsRoutes } from './new-products.routing';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
@NgModule({
    declarations: [
        NewProductsComponent,
    ],
    imports: [
        RouterModule.forChild(newProductsRoutes),
        SidenavModule,

        MatSelectModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
    ],
    exports: [
        NewProductsComponent,
    ],
    providers: [
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ],
})
export class NewProductsModule { }