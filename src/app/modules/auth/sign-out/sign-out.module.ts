import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignOutComponent } from './sign-out.component';

@NgModule({
    declarations: [
        SignOutComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        SignOutComponent
    ]
})
export class SignOutModule { }