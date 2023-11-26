export class Supplier {

    constructor(init?: Partial<Supplier>) {
        Object.assign(this, init);
    }

    _id: string = '';
    name: string = '';
    ruc: string = '';
    phone: string = '';
    address: string = '';
    
    created_at: Date = new Date();
    updated_at: Date = new Date();
}