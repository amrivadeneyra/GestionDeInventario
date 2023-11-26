
/* Angular */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* Components */
import { HomeComponent } from './home.component';

/* routing */
import { homeRoutes } from './home.routing';
import { SidenavModule } from 'src/app/layouts/sidenav/sidenav.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    RouterModule.forChild(homeRoutes),

    //componentes
    SidenavModule,
  ],
  providers: [],
})
export class HomeModule { }