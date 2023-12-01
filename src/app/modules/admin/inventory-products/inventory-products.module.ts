
/* Angular */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

/* Components */
import { SidenavModule } from 'src/app/layouts/sidenav/sidenav.module';
import { InventoryProductsComponent } from './inventory-products.component';

/* routing */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { inventoryProductsRoutes } from './inventory-products.routing';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        InventoryProductsComponent,
    ],
    imports: [
        RouterModule.forChild(inventoryProductsRoutes),
        SidenavModule,

        MatSelectModule,
        MatIconModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
    ],
    exports: [
        InventoryProductsComponent,
    ],
})
export class InventoryProductsModule { }