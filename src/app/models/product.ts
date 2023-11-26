export class Product {

    constructor(init?: Partial<Product>) {
        Object.assign(this, init);
    }

    _id: string = '';
    name: string = '';
    price: number = 0;
    stock: string = '';
    batch: string = ''; //lote
    description: string = '';
    category: string = '';
    image_url: string = '';
    supplier: string = '';
    serial_number: string = '';

    created_at: Date = new Date();
    updated_at: Date = new Date();
}