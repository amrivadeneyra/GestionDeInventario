import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usersValue } from 'src/app/values-force/user';
import { AuthService } from 'src/services/auth/auth.service';
import { NotificationService } from 'src/services/notification/notification.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();


  signInForm!: UntypedFormGroup;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _formBuilder: UntypedFormBuilder,
    private _notification: NotificationService,
  ) { }

  ngOnInit(): void {
    this.initSignInForm();
  }

  initSignInForm(): void {
    this.signInForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  signIn(): void {

    const emailControl = this.signInForm.get('email');
    const passwordControl = this.signInForm.get('password');
    if (!emailControl?.value || !passwordControl?.value) {
      this._notification.showWarning("Complete sus credenciales");
      return;
    }

    const email = emailControl.value;
    const password = passwordControl.value;
    const user = usersValue.find(u => u.email === email && u.password === password);
    if (user) {
      this._authService.setLoggedInUser(user);
      window.location.reload();
      this.closeModal.emit(true);
    } else {
      const userExists = usersValue.some(u => u.email === email);
      if (userExists) {
        this._notification.showError("Credenciales incorrectas");
      } else {
        this._notification.showError("El usuario no existe");
      }
    }

  }

  //!TODO funciones importantes
  funciones() {
    // verifica si alguien esta logueado actualmente
    const isLoggedIn = this._authService.isLoggedIn();
    console.log("🚀 ~ isLoggedIn:", isLoggedIn)


    // muestra informacion del usuario logueado
    const user = this._authService.getLoggedInUser();
    console.log("🚀 ~ isLoggedIn:", user)

    // destruye sesion del usuario
    this._authService.logout();
  }
}
