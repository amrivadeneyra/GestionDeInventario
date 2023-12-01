export class User {

    constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }

    _id: string = '';
    name: string = '';
    last_name:string = '';
    years_old: number = 0;
    password: string = '';
    email: string = '';
    rol: string = '';
    avatar: string = '';
    telephone_number: string = '';

    created_at: Date = new Date();
    updated_at: Date = new Date();
}