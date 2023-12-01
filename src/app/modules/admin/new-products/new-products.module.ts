
/* Angular */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

/* Components */
import { NewProductsComponent } from './new-products.component';
import { SidenavModule } from 'src/app/layouts/sidenav/sidenav.module';

/* routing */
import { newProductsRoutes } from './new-products.routing';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';



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
    ],
    exports: [
        NewProductsComponent,
    ],
})
export class NewProductsModule { }