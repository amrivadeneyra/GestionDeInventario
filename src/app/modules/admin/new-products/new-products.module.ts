
/* Angular */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Components */
import { NewProductsComponent } from './new-products.component';
import { SidenavModule } from 'src/app/layouts/sidenav/sidenav.module';

/* routing */
import { newProductsRoutes } from './new-products.routing';
import { CommonModule } from '@angular/common';



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
    ],
    exports: [
        NewProductsComponent,
    ],
})
export class NewProductsModule { }