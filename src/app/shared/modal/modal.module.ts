import { NgModule } from "@angular/core";
import { ModalComponent } from "./modal.component";
import { CommonModule } from "@angular/common";
import { SignInModule } from "src/app/modules/auth/sign-in/sign-in.module";
import { SignOutModule } from "src/app/modules/auth/sign-out/sign-out.module";

@NgModule({
    declarations: [
        ModalComponent
    ],
    imports: [
        CommonModule,
        SignInModule,
        SignOutModule,
    ],
    exports: [
        ModalComponent
    ]
})
export class ModalModule { }