
/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

/* Components */
import { ProductsModalComponent } from './products-modal.component';
import { NewProductsModule } from 'src/app/modules/admin/new-products/new-products.module';


@NgModule({
    declarations: [
        ProductsModalComponent,
    ],
    imports: [
        CommonModule,

        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatOptionModule,

        NewProductsModule,
    ],
    exports: [
        ProductsModalComponent
    ],
})
export class ProductsModalModule { }