import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { navigation } from 'src/app/navigation/sidenavNavigation';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {

  navigation: any[] = []
  currentUser: User = new User();

  constructor(
    private router: Router,
    private _authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.navigation = navigation;
    this.currentUser = this._authService.getLoggedInUser();
  }

  goRouteLink(route: string): void {
    this.router.navigate([route]);
  }

  hasPermission(roles: string | string[]): boolean {
    const userRoles = this.currentUser?.rol;

    if (userRoles && roles) {
      if (Array.isArray(roles)) {
        return roles.some(rol => userRoles.includes(rol));
      } else {
        return userRoles.includes(roles);
      }
    }

    return false;
  }

}
