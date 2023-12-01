import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { usersValue } from 'src/app/values-force/user';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User[] = []

  currentUser: User = new User();
  
  constructor(
    private router: Router,
    private _dialog: MatDialog,
    private _authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.user = usersValue;
    this.currentUser = this._authService.getLoggedInUser();
  }

  openModal(): void {

    const userLogged = this._authService.getLoggedInUser();

    const modalType = userLogged ? 'sign-out' : 'sign-in';

    this._dialog.open(ModalComponent, {
      data: {
        type: modalType,
      },
      width: '40%',
    });

  }

}
