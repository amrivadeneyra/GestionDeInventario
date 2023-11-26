
/* Angular */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from '@angular/common';

/* Components */
import { SidenavModule } from 'src/app/layouts/sidenav/sidenav.module';
import { ProductsComponent } from './products.component';

/* routing */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { productsRoutes } from './products.routing';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    declarations: [
        ProductsComponent,
    ],
    imports: [
        RouterModule.forChild(productsRoutes),
        SidenavModule,

        MatSelectModule,
        MatIconModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ProductsComponent,
    ],
})
export class ProductsModule { }