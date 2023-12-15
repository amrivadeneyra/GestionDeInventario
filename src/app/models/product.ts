export class Product {

    constructor(init?: Partial<Product>) {
        Object.assign(this, init);
    }

    _id: string = '';
    name: string = '';
    price: number = 0;
    stock: number = 0;
    batch: string = ''; //lote
    description: string = '';
    quantity: number = 0;
    category: number = 0;
    image_url: string = '';
    supplier: string = '';
    serial_number: string = '';
    reviews: string[] = [];
    expiration_date: Date = new Date();

    created_at: Date = new Date();
    updated_at: Date = new Date();
}