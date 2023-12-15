import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { productsRoutes } from "./products.routing";
import { SidenavModule } from "src/app/layouts/sidenav/sidenav.module";
import { CommonModule } from "@angular/common";
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ProductsComponent,
    ],
    imports: [
        RouterModule.forChild(productsRoutes),
        CommonModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        SidenavModule,
    ],
    exports: [
        ProductsComponent,
    ]
})
export class ProductsModule { }