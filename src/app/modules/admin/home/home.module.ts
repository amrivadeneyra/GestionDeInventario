
/* Angular */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* Components */
import { HomeComponent } from './home.component';

/* routing */
import { homeRoutes } from './home.routing';
import { SidenavModule } from 'src/app/layouts/sidenav/sidenav.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    RouterModule.forChild(homeRoutes),

    //componentes
    SidenavModule,
    MatDialogModule,
    MatIconModule,
    CommonModule,
  ],
  exports:[HomeComponent],
  providers: [],
})
export class HomeModule { }