// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';// Importa el modelo de usuario
import { User } from 'src/app/models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loggedInUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
    public loggedInUser$: Observable<User | null> = this.loggedInUserSubject.asObservable();


    setLoggedInUser(user: User): void {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        this.loggedInUserSubject.next(user);
    }

    getLoggedInUser(): any {
        const storedUser = localStorage.getItem('loggedInUser');

        if (storedUser && storedUser.length > 0) {
            return JSON.parse(storedUser);
        } else {
            return false;
        }
    }


    logout(): void {
        localStorage.removeItem('loggedInUser');
        this.loggedInUserSubject.next(null);
    }

    isLoggedIn(): boolean {
        return this.getLoggedInUser() !== null;
    }
}
